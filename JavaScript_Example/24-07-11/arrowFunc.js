// 24-07-11 10:00
// 화살표 함수(arrow function)


// $ 일반 함수 표현식
let add = function(num1, num2) {
  return num1 + num2
}

// $ 화살표 함수(생략1)
add = (num1, num2) => {
  return num1 + num2
}
// $ 화살표 함수(생략2)
// ! 괄호 안에 내용이 여러줄일 경우에는 일반 괄호() 사용 불가능X ! 
add = (num1, num2) => ( num1 + num2 )

// $ 화살표 함수(생략3)
add = (num1, num2) => num1 + num2

// $ 화살표 함수(생략4)
let sayHello = name => `Hello ${name}`

// ! 인수가 없는 경우에는 괄호 생략 불가능 !
let showError = () => {
  alert('error!');
}

