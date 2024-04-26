// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() { 
  // async keyword를 붙이면 함수 코드 블록에 있는 코드가 
  // 자동으로 Promise 객체로 감싸진다.
  // do network request in 10 secs...
  console.log('fetch!')
  return 'ellie';
}

// 2. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return '사과';
}

async function getBanana() {
  await delay(1000);
  return '바나나';
}

async function pickFruits() {
  // const apple = await getApple();
  // const banana = await getBanana();
  // ! 개선점 !
  // (현재는 각 getApple, getBanana가 비동기 처리 되어있기 때문에 우선 선언하면 시간 지연을 1+1에서 1로 줄일 수 있다.)
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;

  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);


// 3. useful Promise APIs(all, race)
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
  .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

// ---------

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);

// await 미사용 시
// async function getBanana() {
//   return delay(3000)
//   .then(() => '바나나');
//   // return '바나나';
// }

// Promise 객체 생성 시 실행자(executor) 함수 제공
// 해당 함수는 Promise 객체 생성자의 인자로 전달되며 바로 호출된다.
// 실행자 함수는 두 개의 매개변수 resolve(성공)와 reject(실패)를 받는다. 


// Q. 내가 아래처럼 코드를 짠다고 했을 때 1초 뒤에는 setTimeout 메소드로 인해 resolve가 호출이 되서 Promise 객체가 fulfilled 상태가 되잖아? 근데 cosnt 변수 선언자는 값이 변경되면 오류가 나지 않아? 왜 문제 없이 실행이 되는거야?
// A. GPT 답변
// A. 좋은 질문이에요! 이해를 돕기 위해 여러분이 지적한 점들에 대해 설명해 보겠습니다.
// 먼저, const 선언자는 선언된 변수에 대해 재할당을 허용하지 않습니다. 즉, 변수 자체에 새로운 값을 할당할 수 없습니다. 그러나 const로 선언된 객체 또는 배열의 내부 상태(즉, 객체의 속성이나 배열의 요소)는 변경할 수 있습니다. 

const promise = new Promise((resolve, reject) => {
  console.log('pending!')
  setTimeout(() => resolve(1), 1000)
})

console.log('promise(1):: ', promise)
setTimeout(() => console.log('promise(2):: ', promise), 2000)

const arr = [1, 2, 3, 4, 5]
console.log('arr(1):: ', arr);
arr[2] = 5; // 배열이나 객체의 내부 속성은 변경 가능(참조된 내용은 변경 불가능)
console.log('arr(2):: ', arr);


const user = fetchUser();
console.log(user);