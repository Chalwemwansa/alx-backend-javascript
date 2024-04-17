export default function updateStudentGradeByCity(studentArray, city, studentGrade) {
  const newArray = studentArray.map((student) => {
    if (student.location === city) {
      let grade = studentGrade.filter((studentGrade) => studentGrade.studentId === student.id);
      if (grade.length !== 0) {
        student['grade'] = grade[0].grade;
      } else {
        student['grade'] = 'N/A';
      }
      return student;
    }    
  });
  return newArray.filter((element) => element !== undefined);
}
