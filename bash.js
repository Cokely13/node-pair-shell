const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')


process.stdout.write('prompt> ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === "ls") {
   ls()
  }
  if (cmd === "pwd") {
  pwd()
  }
  if (cmd === "cat") {
    cat()
  }
  else {
  process.stdout.write('You typed: ' + cmd)
  process.stdout.write('\nprompt > ');
  }
})
