export default function updateStudentGradeByCity(student, city, newGrades) {
  return student.filter((loc) => loc.location === city)
    .map((std) => ({
      ...std,
      grade: newGrades.filter((grd) => grd.studentId === std.id).map((g) => g.grade)[0] || 'N/A' }));
}
