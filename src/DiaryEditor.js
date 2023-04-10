import { useState } from 'react';

const DiaryEditor = () => {

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
        if(state.author.length < 1 ) {
            alert("작성자 이름을 최소 1글자 이상 입력해주세요"); //최소 작성 기준 추가
            return;
        }
        if(state.content.length < 5 ) {
            alert("본문을 최소 5글자 이상 입력해주세요"); //최소 작성 기준 추가
            return;
        }
        alert("저장 성공");
    }

    return <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            <input
            name="author"
            value={state.author}
            onChange={handleChangeState}
            />
        </div>
        <div>
            <textarea 
            name="content" //name 속성 추가
            value={state.content}
            onChange={handleChangeState}
            />
        </div>
        <div>
            <select
            name="emotion"
            value={state.emotion}
            onChange={handleChangeState}>
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
};
export default DiaryEditor;