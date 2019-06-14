import * as bCrypt from 'bcrypt';

export function hash(data) {
  return new Promise((resolve, reject) => {
    bCrypt.hash(data, 8, function (err, hash) {
      /* istanbul ignore if  */
      if (err) {
        reject(err);
      } else {
        resolve(hash);
      }
    });
  })
}

export function compare(password, hash) {
  return new Promise((resolve, reject) => {
    bCrypt.compare(password, hash, function (err, match) {
      /* istanbul ignore if  */
      if (err) {
        throw { status: 500, message: err };
      }
      if (match) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  })
}