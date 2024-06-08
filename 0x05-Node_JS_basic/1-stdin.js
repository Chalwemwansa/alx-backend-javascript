// module is executed from the cmd, by reading a name from the stdout
// and printing a custom message to the stdout
// when done the process prints a message to the stdout

process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write('Your name is: ' + name);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
