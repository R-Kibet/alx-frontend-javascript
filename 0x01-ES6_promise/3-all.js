import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then((data) => {
    const body = data[0].body;
    const first = data[1].firstName;
    const lst = data[1].lastName;
    console.log(`${body} ${first} ${lst}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
