const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'src');
const indexPath = path.join(__dirname, 'index.js');
fs.readdir(srcPath, (err,files) => {
  const jsFiles = files.filter(file => file.endsWith('.js')|| file.endsWith('.ts'));
  const indexContent = jsFiles
    .map(file => `import './src/${file}';`)
    .join('\n');
  fs.writeFile(indexPath, indexContent, (writeErr) => {
    if (writeErr) {
      console.error('Failed writing to index.js:', writeErr);
    } else {
      console.log('index.js created successfully.');
    }
  });
});
