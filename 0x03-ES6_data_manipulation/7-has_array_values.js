export default function hasValuesFromArray(set, array) {
  let flag = true; 
  array.forEach((element) => {
  if (!set.has(element)) {
    flag = false;
    return;
  }
  });
  return flag;
}
