export default function createInt8TypedArray(length, position, value) {
  const dataView = new DataView(new ArrayBuffer(length));
  try {
    dataView.setInt8(position, value);
  } catch (error) {
    if (error instanceof RangeError) {
      throw new Error('Position outside range');
    } else {
      throw error;
    }
  }
  return dataView;
}
