export default function divideFunction(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw (new Error());
    }
    return (numerator / denominator);
  } catch (er) {
    throw Error('cannot divide by 0');
  }
}
