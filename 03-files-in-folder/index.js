const fs = require('fs');
const path = require('path');

const pathToDir = path.join(__dirname, 'secret-folder');

fs.readdir(pathToDir, (err, files) => {
  if (err) {
    console.log(err);
  }else {
    files.forEach(file => {
      const filePath = path.join(pathToDir, `${file}`);

      fs.stat(filePath, (err, stats) => {
        if (err) throw new Error();

        if (!stats.isDirectory()) {
          console.log(file.split('.').join(' - ') + ` - ${Math.ceil(stats.size / 1024)}kB\n`);            
        }
      });
    });
  };
});
