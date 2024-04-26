// Callback Hell example 
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        if(
          (id === 'ellie' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id);
        } else {
          reject('not found');
        }
      }, 2000)
    })
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      if (user === 'ellie') {
        resolve({ name: 'ellie', role: 'admin' });
      } else {
        reject('no access');
      }
    })
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

// 02: fixing code(clean)
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then(user => alert(`Hello ${user.name}, you have a ${user.role}role`))
  .catch(e => console.log(new Error(e)))


  // 01: first try code
  // .then(id => {
  //   userStorage.getRoles(id)
  //     .then(res => {
  //       alert(`Hello ${res.name}, you have a ${res.role}role`);
  //     })
  //     .catch(e => {
  //       console.log(new Error(e))
  //     })
  // })
  // .catch(e => {
  //   console.log(new Error(e))
  // })