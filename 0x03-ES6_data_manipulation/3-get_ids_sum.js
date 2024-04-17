export default function getStudentIdsSum(students) {
  const total = students.reduce((sum, value) => sum + value.id, 0);
  return total;
}
