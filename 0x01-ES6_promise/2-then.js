export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    const suc = { status: 200, body: 'Success' };
    return promise
      .then(() => suc)
      .catch(() => new Error())
      .finally(() => { console.log('Got a response from the API'); });
  });
}
