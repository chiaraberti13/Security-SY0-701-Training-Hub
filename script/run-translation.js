/* global process, __dirname, require */
const fs = require('fs');
const path = require('path');

const logPath = path.join(__dirname, '../debug-trans.log');

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  fs.appendFileSync(logPath, line, 'utf8');
  console.log(msg);
}

async function runAll() {
  fs.writeFileSync(logPath, '=== STARTING COMPLETE DOUBLE-LANGUAGE TRANSLATION RUNNER ===\n', 'utf8');
  
  try {
    log('Loading translate.js...');
    const translateIndexDest = require('./translate.js');
    log('Index translation script loaded successfully.');
  } catch (err) {
    log(`Error loading translate.js: ${err.message}\n${err.stack}`);
  }

  try {
    log('Loading translate-sections.js...');
    const translateSections = require('./translate-sections.js');
    log('Chapter sections translation script loaded successfully.');
  } catch (err) {
    log(`Error loading translate-sections.js: ${err.message}\n${err.stack}`);
  }
}

runAll().catch(err => {
  log(`Master runAll crashed overall: ${err.message}\n${err.stack}`);
});
