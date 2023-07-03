export default function getStudentsByLocation(student, city) {
  return student.filter((loc) => loc.location === city);
}
