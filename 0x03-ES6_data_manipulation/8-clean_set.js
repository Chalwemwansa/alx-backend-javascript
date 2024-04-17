export default function cleanSet(set, startString) {
  const strLength = startString.length;
  const array = Array.from(set).map((element) => {
    if (element.startsWith(startString) && startString !== '') {
      return element.slice(strLength);
    }
  }).filter((element) => element !== undefined);
  let str = array.join('-');
  return str;
}
