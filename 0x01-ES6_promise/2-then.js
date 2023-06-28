export default function handleResponseFromAPI(promise) {
  const suc = { status: 200, body: 'success' };
  return promise
    .then(() => suc)
    .catch(() => new Error())
    .finally(() => { console.log('Got a response from the API'); });
}
