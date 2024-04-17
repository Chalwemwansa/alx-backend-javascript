export default function getListStudentsByLocation(objArray, city) {
  const aray = objArray.filter((student) => student.location === city);
  return aray;
}
