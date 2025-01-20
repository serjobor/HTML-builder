const fs = require('fs');
const path = require('path');

const pathToFolderFiles = path.join(__dirname, 'files');
const pathToFolderFilesCopy = path.join(__dirname, 'files-copy');

const testArr = [];

const copyDir = () => {
  fs.readdir(pathToFolderFiles, (err, files) => {
    if (err) {
      console.log(err);
    }
    else {
      files.forEach(file => {
        testArr.push(file);
        // console.log(file);      
      });

      fs.mkdir(pathToFolderFilesCopy, { recursive: true }, (err) => {
        if (err) {
          return console.log(err);
        }

        for (const key in testArr) {
          fs.copyFile(path.join(pathToFolderFiles, `${testArr[key]}`), 
                path.join(pathToFolderFilesCopy, `${testArr[key]}`), 
                err => {
            if (err) {
              console.log(err);
            }
          });
        }
        console.log('Directory created');
      });
    };
  });
};

copyDir();