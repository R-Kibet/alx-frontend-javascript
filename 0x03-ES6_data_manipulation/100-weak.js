export const weakMap = new WeakMap();
let count = 1;

export function queryAPI(endpoint) {
  weakMap.set(endpoint, count);
  count += 1;
  const qcnt = weakMap.get(endpoint);
  if (qcnt >= 5) {
    throw new Error('Endpoint load is high');
  }
}
