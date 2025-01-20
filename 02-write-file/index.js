const fs = require('fs');
const path = require('path');
const pathToFile = path.join(__dirname, 'text.txt');

const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt(`Strat process \n`);
rl.prompt();
rl.on('line', (input) => {
  if(input === 'exit') {
    console.log('\n Finish process \n');
    rl.close();
  }else {
    fs.readFile(pathToFile, 'utf-8', (err, dataFromFile) => {
      if (err) {
        fs.writeFile(pathToFile, input, (err) => {
          if(err) throw err;
        });
      }else {
        const upData = dataFromFile + '\n' + input;
        fs.writeFile(pathToFile, upData, (err) => {
          if(err) throw err;
        });
      }
    });
  }
});

rl.on('SIGINT', () => {
    console.log('\n Finish process \n');
    rl.close();
});


