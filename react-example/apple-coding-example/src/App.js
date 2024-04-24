import {useState} from 'react';
import './App.css';

function App() {
  // Q. 왜 state 써야하는가? 
  // A. state 쓰던 html은 자동으로 재렌더링됨
  // 즉, 자주 변경할 필요가 있는 변수는 useState로 선언하고 아니면 일반변수로 선언!

  // onClick 이벤트 {} 중괄호 안에 즉시실행함수 or 함수명 작성
  // state 변경 함수 | 호출 => 함수명(변경할 값)
  // 기존 state == 신규 state 일 경우 변경X(에너지 절약 차원)

  let [title, func_title] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [like_count, func_like] = useState(0);  

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {/* button */}
      <button onClick={ () => { 
        let copy = [...title]; 
        copy.sort()
        func_title(copy); 
      } }>가나다순정렬</button>

      <button onClick={ () => { 
        let copy = [...title]; 
        copy[0] = '여자코트 추천'; 
        func_title(copy); 
      } }>글수정</button>

      {/* list */}
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

      {/* detail-modal */}
      <Modal/>
    </div>
  );
}

function Modal() {
  return (
    <>
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}

export default App;
