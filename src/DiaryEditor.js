import { useState } from 'react';

const DiaryEditor = () => {

    const [state, setState] = useState({
        author: "홍길동",
        content: "내용을 입력해주세요",
    });

    const handleChangeState = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);

        setState({
            ...state,
            [e.target.name]: e.target.value, //선택된 값만 변경
        });
    };

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
            value={state.content}
            onChange={handleChangeState}
            />
        </div>
    </div>
};
export default DiaryEditor;