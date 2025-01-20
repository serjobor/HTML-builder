const fs = require('fs');
const path = require('path');

const pathToStyles = path.join(__dirname, 'styles');
const pathToProjectDist = path.join(__dirname, 'project-dist');

fs.readdir(pathToStyles, { withFileTypes: true }, (err, files) => {
  if (err) {
    console.log(err);
  }

  const writeStream = fs.createWriteStream(path.join(pathToProjectDist, 'bundle.css'));

  const styleFiles = files.filter(
    (file) => file.isFile() && path.parse(file.name).ext === '.css',
  );

  styleFiles.forEach((file) => {
    const readStream = fs.createReadStream(path.join(pathToStyles, file.name));

    readStream.pipe(writeStream);
  });
});