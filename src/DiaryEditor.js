import React, { useRef, useState } from "react";

const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "홍길동",
    content: "내용을 입력해주세요",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    setState({
      ...state,
      [e.target.name]: e.target.value, //선택된 값만 변경
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus(); //최소 기준 미달시 포커스
      return;
    }
    if (state.content.length < 5) {
      contentInput.current.focus(); //최소 기준 미달시 포커스
      return;
    }
    onCreate(state.author, state.content, state.emotion); //일기 리스트에 추가
    alert("저장 성공");
    setState({
      //저장이 끝나면 초기화
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content" //name 속성 추가
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};
export default React.memo(DiaryEditor); //한꺼번에 React.memo로 묶을 수 있다
