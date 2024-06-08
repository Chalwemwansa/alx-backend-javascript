// script has a function that gets the data passed in
// and prints it to stdout

function displayMessage(args) {
  process.stdout.write(args + '\n');
};

module.exports = displayMessage;
