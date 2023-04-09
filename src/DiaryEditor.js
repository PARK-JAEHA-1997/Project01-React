import { useState } from 'react';

const DiaryEditor = () => {

    const [state, setState] = useState({
        author: "홍길동",
        content: "내용을 입력해주세요",
    });

    return <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            <input
            name="author"
            value={state.author}
            onChange={(e)=>{
                setState({
                    ...state, //spread 연산자 (반드시 spread가 먼저)
                    author: e.target.value, //저자는 변경
                });
            }}
            />
        </div>
        <div>
            <textarea 
            value={state.content}
            onChange={(e)=>{
                setState({
                    ...state, //spread 연산자
                    content: e.target.value, //컨텐츠는 변경
                });
            }}
            />
        </div>
    </div>
};
export default DiaryEditor;