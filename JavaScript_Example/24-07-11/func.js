// 24-07-11 09:55

// 함수 선언문 
function sayHello() { 
  console.log('Hello');
}

// 함수 표현식
let sayHello = function() {
  console.log('Hello');
}

// 함수 선언문 VS 함수 표현식
// 함수 선언문 => 어디서든 호출이 가능하다! : 호이스팅(hoisting)
// JS 는 실행 전 우선적으로 모든 함수의 선언문을 모아서 정리해둔다.