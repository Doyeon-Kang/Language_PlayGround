import {useState} from 'react';
import './App.css';

function App() {
  // Q. 왜 state 써야하는가? 
  // A. state 쓰던 html은 자동으로 재렌더링됨
  // 즉, 자주 변경할 필요가 있는 변수는 useState로 선언하고 아니면 일반변수로 선언!

  // onClick 이벤트 {} 중괄호 안에 즉시실행함수 or 함수명 작성
  // state 변경 함수 | 호출 => 함수명(변경할 값)

  let [title, func_title] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [like_count, func_like] = useState(0);  

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>{ title[0] }<span onClick={ () => { func_like(like_count++) } }>👍</span> {like_count} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <button onClick={ () => { func_title(['여자코트 추천', '강남 우동맛집', '파이썬독학']) } }>버튼</button>
    </div>
  );
}

export default App;
