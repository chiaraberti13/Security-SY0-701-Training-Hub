import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

describe('Compilation & Build Smoke Test (T-C4)', () => {
  it('should run npm run build successfully and produce a valid dist directory', () => {
    // If the dist folder doesn't exist, let's trigger the build internally first to make the test fully self-contained
    const distPath = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distPath)) {
      console.log('Dist folder not found, running build smoke test compiler...');
      execSync('npm run build', { stdio: 'inherit' });
    }

    expect(fs.existsSync(distPath)).toBe(true);

    // Verify core pages are copied to dist
    const expectedFiles = [
      'index.html',
      'checklist.html',
      'quizzes.html',
      'glossario.html',
      'quiz_database.xml',
      'sw.js'
    ];

    expectedFiles.forEach(fileName => {
      const filePath = path.join(distPath, fileName);
      expect(fs.existsSync(filePath)).toBe(true);
      expect(fs.statSync(filePath).size).toBeGreaterThan(0);
    });

    // Verify subdirectories are created and populated
    const subDirs = ['style', 'script', 'chapters'];
    subDirs.forEach(subDir => {
      const fullPath = path.join(distPath, subDir);
      expect(fs.existsSync(fullPath)).toBe(true);
      expect(fs.statSync(fullPath).isDirectory()).toBe(true);
    });

    // Verify critical assets are generated and correct
    const searchIndexPath = path.join(distPath, 'script', 'search-data.json');
    expect(fs.existsSync(searchIndexPath)).toBe(true);
    const searchIndexData = JSON.parse(fs.readFileSync(searchIndexPath, 'utf8'));
    expect(typeof searchIndexData).toBe('object');
    expect(Array.isArray(searchIndexData.chapters) || Array.isArray(searchIndexData)).toBe(true);

    const glossaryDbPath = path.join(distPath, 'script', 'glossario_db.json');
    expect(fs.existsSync(glossaryDbPath)).toBe(true);

    const chaptersInDist = fs.readdirSync(path.join(distPath, 'chapters')).filter(f => f.endsWith('.html'));
    expect(chaptersInDist.length).toBe(28);
  });
});
