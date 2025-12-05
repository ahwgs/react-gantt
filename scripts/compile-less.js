const fs = require('fs');
const path = require('path');
const less = require('less');
const glob = require('glob');

const TARGET_DIRS = ['dist/esm', 'dist/cjs'];

// Helper to recursively find files
function findFiles(dir, ext) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(findFiles(filePath, ext));
    } else if (filePath.endsWith(ext)) {
      results.push(filePath);
    }
  });
  return results;
}

async function compileLess() {
  // We'll look for less files in src and compile them to dist
  // Actually, father copies them to dist, so we can just find them in dist, compile, and delete?
  // Yes.

  for (const distDir of TARGET_DIRS) {
    if (!fs.existsSync(distDir)) continue;

    const lessFiles = findFiles(distDir, '.less');
    
    console.log(`Found ${lessFiles.length} .less files in ${distDir}`);

    for (const filePath of lessFiles) {
      const lessContent = fs.readFileSync(filePath, 'utf8');
      
      try {
        // We need to handle imports. 
        // Since we are in dist, relative imports might work if paths are preserved.
        // But standard less compilation might fail on resolving if not careful.
        // Let's try simple compilation.
        
        const output = await less.render(lessContent, {
          filename: filePath,
          paths: [path.dirname(filePath), path.join(__dirname, '../src')] // Add src to paths for theme imports
        });

        const cssFilePath = filePath.replace('.less', '.css');
        fs.writeFileSync(cssFilePath, output.css);
        
        // Remove .less file? Optional. Keeping it is fine but we want users to use CSS.
        // fs.unlinkSync(filePath); 
        
      } catch (e) {
        console.error(`Error compiling ${filePath}:`, e);
      }
    }

    // Now replace imports in JS files
    const jsFiles = findFiles(distDir, '.js');
    console.log(`Updating imports in ${jsFiles.length} .js files in ${distDir}`);

    for (const filePath of jsFiles) {
      let content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('.less')) {
        content = content.replace(/\.less/g, '.css');
        fs.writeFileSync(filePath, content);
      }
    }
  }
  console.log('Less compilation and import rewrite complete.');
}

compileLess();

