export default function getListStudentIds(objArray) {
  if (!Array.isArray(objArray)) {
    return [];
  }
  const aray = objArray.map((element) => element.id);
  return aray;
}
