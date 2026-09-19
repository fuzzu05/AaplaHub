import fs from 'fs';
import path from 'path';

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      // match from './something' or from '../something'
      content = content.replace(/from\s+['"](\.[^'"]*?)(?<!\.js)['"]/g, "from '$1.js'");
      fs.writeFileSync(fullPath, content);
    }
  }
}

processDirectory('./src');
console.log('Fixed imports!');
