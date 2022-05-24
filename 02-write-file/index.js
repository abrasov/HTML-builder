const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const fullPath = path.join(__dirname, './text.txt');
const writeStream = fs.createWriteStream(fullPath);

console.log('Привет! Введите текст. Для выхода введите exit или нажмите ctrl+c');

const rl = readline.createInterface({ input, output });

const endWork = () => {
  rl.close();
  console.log('Работа завершена.');
};
const saveEnter = (input) => {
  if (input.trim() === 'exit') {
    endWork();
  } else {
    writeStream.write(`${input}\n`);
  }
};

rl.on('line', saveEnter);
rl.on('SIGINT', endWork);