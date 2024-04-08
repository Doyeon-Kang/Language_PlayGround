import {useState} from 'react';
import './App.css';

function App() {
  let [title, b] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  // Q. 왜 state 써야하는가? 
  // A. state 쓰던 html은 자동으로 재렌더링됨
  // 즉, 자주 변경할 필요가 있는 변수는 useState로 선언하고 아니면 일반변수로 선언!

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>{ title[0] }</h4>
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
    </div>
  );
}

export default App;
