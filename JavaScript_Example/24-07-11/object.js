const superman = {
  name: 'clark',
  age: 30
}

console.log(superman.hairColor); // 존재하지 않는 속성 접근 시 undefined

// 속성 존재 여부 확인 => '속성명' in 객체
console.log('name' in superman); // true
console.log('hairColor' in superman); // false


// for .. in ..
for(x in superman) {
  console.log(x) // loop: name, age...
}