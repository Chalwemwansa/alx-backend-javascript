// module contains a function that subtracts, adds or divides two numbers
// based on the value of type sent as the thirs argument

module.exports = function calculateNumber (type, a, b) {
  if (type === 'SUM') {
    return (Math.round(a) + Math.round(b));
  } else if (type === 'SUBTRACT') {
    return (Math.round(a) - Math.round(b));
  } else if (type === 'DIVIDE') {
    if (Math.round(b) === 0) {
      return 'Error';
    } else {
      return (Math.round(a) / Math.round(b));
    };
  };
};
