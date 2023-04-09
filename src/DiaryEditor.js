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
                    author: e.target.value,
                    content: state.content,
                });
            }}
            />
        </div>
        <div>
            <textarea 
            value={state.content}
            onChange={(e)=>{
                setState({
                    author: state.author,
                    content: e.target.value,
                });
            }}
            />
        </div>
    </div>
};
export default DiaryEditor;