const fs = require('fs');
const path = require('path');

const chaptersDir = path.join(__dirname, '..', 'chapters');

if (!fs.existsSync(chaptersDir)) {
  console.error('Chapters directory not found!');
  process.exit(1);
}

const files = fs.readdirSync(chaptersDir);

const themeScript = `  <script>
    (function() {
      try {
        localStorage.removeItem('theme');
      } catch (e) {
        console.warn('localStorage access denied:', e);
      }
      document.documentElement.removeAttribute('data-theme');
    })();
  </script>`;

const oldThemeScriptRegex = /<script>\s*\(function\(\)\s*\{\s*var\s+savedTheme[\s\S]*?\}\)\(\);\s*<\/script>/gi;

let updateCount = 0;
files.forEach((file) => {
  if (path.extname(file) === '.html') {
    const filePath = path.join(chaptersDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    let modified = false;

    if (oldThemeScriptRegex.test(content)) {
      content = content.replace(oldThemeScriptRegex, themeScript);
      modified = true;
    } else if (content.includes("localStorage.getItem('theme')")) {
      // General match
      content = content.replace(/<script>\s*\(function\(\)[\s\S]*?savedTheme[\s\S]*?<\/script>/gi, themeScript);
      modified = true;
    } else if (!content.includes("removeItem('theme')")) {
      content = content.replace(/<head>/i, `<head>\n${themeScript}`);
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Successfully updated/injected theme-sync script in: ${file}`);
      updateCount++;
    }
  }
});

console.log(`Task completed: injected/updated theme script for ${updateCount} HTML files.`);
