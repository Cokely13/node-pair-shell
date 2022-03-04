const fs = require('fs');

module.exports = function () {process.stdout.write('file name> ');
process.stdin.on('data', (data) => {
  const file = data.toString().trim();
  fs.readFile(file, 'utf8' , (err, file) => {
    if (err) {
      console.error(err)
      return
    }
    process.stdout.write(file)
    process.stdout.write('\nprompt > ');
  })})}
