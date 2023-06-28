import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((data) => {
      const arr = [];
      data.forEach((dt) => {
        if (dt.status === 'fulfilled') {
          arr.push({
            status: dt.status,
            value: dt.value,
          });
        } else {
          arr.push({
            status: dt.status,
            value: `Error: ${dt.reason.message}`,
          });
        }
      });
      return arr;
    });
}
