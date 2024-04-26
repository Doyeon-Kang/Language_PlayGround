'use strict';

// JavaScript is synchrounous.
// Execute the code block by order after hoisting.
// hoisting: var, function declaration

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3')

// Synchronous callback
function printImmdiately(print) {
  print();
}
printImmdiately(() => console.log('hello'));

// Aynchronous callback 
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000);

// Callback Hell example 
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(()=> {
      if(
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000)
  }

  getRoles(user, onSuccess, onError) {
    if (user === 'ellie') {
      onSuccess({ name: 'ellie', role: 'admin' });
    } else {
      onError(new Error('no access'));
    }
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id, password, (user) => {
  userStorage.getRoles(
    user,
    userWithRole => {
      alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role}role`);
    }, 
    error => {
      console.log(error)
    })
  }, error => {
    console.log(error)
  })