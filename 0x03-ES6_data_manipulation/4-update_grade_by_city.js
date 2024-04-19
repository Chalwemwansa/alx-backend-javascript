export default function updateStudentGradeByCity(studentArray, city, studentGrade) {
  const newArray = studentArray.map((student) => {
    const copyStudent = { ...student };
    if (student.location === city) {
      const grade = studentGrade.filter((studentGrade) => studentGrade.studentId === student.id);
      if (grade.length !== 0) {
        copyStudent.grade = grade[0].grade;
      } else {
        copyStudent.grade = 'N/A';
      }
      return copyStudent;
    }
    return undefined;
  });
  return newArray.filter((element) => element !== undefined);
}
