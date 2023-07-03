export default function getListStudentIds(ids) {
  if (Array.isArray(ids)) {
    return ids.map((stdid) => stdid.id);
  }
  return [];
}
