const fs = require('fs');
const path = require('path');

// Function to replace @/ imports with relative paths
function fixImports(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Calculate relative path from file to components directory
  const relativePath = path.relative(path.dirname(filePath), 'components');
  const relativeImport = relativePath.replace(/\\/g, '/');
  
  // Replace @/components with relative path
  const fixedContent = content.replace(/@\/components/g, relativeImport);
  
  if (content !== fixedContent) {
    fs.writeFileSync(filePath, fixedContent);
    console.log(`Fixed imports in: ${filePath}`);
    return true;
  }
  return false;
}

// Function to recursively find all .tsx and .ts files in components directory
function findFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix all files in components directory
const componentsDir = 'components';
const files = findFiles(componentsDir);
let fixedCount = 0;

for (const file of files) {
  if (fixImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed imports in ${fixedCount} files`);
