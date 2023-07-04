export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    for (const [k, val] of map) {
      if (val === 1) {
        map.set(k, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return map;
}
