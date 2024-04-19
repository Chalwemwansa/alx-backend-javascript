export default function cleanSet(set, startString) {
  if (startString === undefined || typeof startString !== 'string') {
    return '';
  }
  const strLength = startString.length;
  const array = Array.from(set).map((element) => {
    if (element !== undefined && element.startsWith(startString) && startString !== '') {
      return element.slice(strLength);
    }
    return undefined;
  }).filter((element) => element !== undefined);
  const str = array.join('-');
  return str;
}
