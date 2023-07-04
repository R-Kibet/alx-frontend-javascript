export default function cleanSet(set, startString) {
  const arr = [];
  let t = '';

  if (startString && typeof startString === 'string') {
    for (const i of set) {
      if (i && i.startsWith(startString)) {
        arr.push(i.slice(startString.length));
      }
    }
    t = arr.join('-');
  }
  return t;
}
