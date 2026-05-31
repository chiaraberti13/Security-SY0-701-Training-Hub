const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, '../translation.log');
const out = fs.openSync(logFile, 'w');
const err = fs.openSync(logFile, 'w');

// Spawn the task as a detached background process
const child = spawn('npx', ['node', path.join(__dirname, 'translate.js')], {
  detached: true,
  stdio: [ 'ignore', out, err ]
});

child.unref();
console.log('Background translation task successfully detached. PID:', child.pid);
process.exit(0);
