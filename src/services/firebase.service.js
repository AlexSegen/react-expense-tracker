import { database } from "../config/firebase.config";
const dbRef = database.ref();
const collectionRef = dbRef.child("transactions");

export const create = (payload) => {
  return new Promise((resolve, reject) => {
    collectionRef
      .push(payload)
      .then((result) => {
        resolve({
            key: result.key,
            ...payload
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const list = () => {
    return new Promise((resolve, reject) => {
      var records = [];
      collectionRef.once('value', snapshot => {
        snapshot.forEach(child => {
          const { id, title, amount, category, comments, createdAt } = child.val()
          records.push({
            key: child.key,
            id,
            title,
            amount,
            category,
            comments,
            createdAt
          });
        });
        resolve(records);
      });
    })
}

export const update = (key, payload) => {
    return new Promise((resolve, reject) => {
        collectionRef.child(key).update(payload).then((result) => {
            resolve({
                key: result.key,
                ...payload
            });
        }).catch(err => {
        reject(false);
      });
    })
  }

export const remove = key => {
    return new Promise((resolve, reject) => {
        collectionRef.child(key).remove().then(() => {
        resolve(true);
      }).catch(error => {
        reject(error);
      });
    })
  }