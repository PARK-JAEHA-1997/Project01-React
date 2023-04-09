import { useState } from 'react';

const DiaryEditor = () => {

    const [author, setAuthor] = useState("홍길동");
    const [content, setContent] = useState("내용을 입력해주세요");
    return <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            <input
            name="author"
            value={author}
            onChange={(e)=>{
                setAuthor(e.target.value);}}/>
        </div>
        <div>
            <textarea 
            value={content}
            onChange={(e)=>{
                setContent(e.target.value);
            }}
            />
        </div>
    </div>
};
export default DiaryEditor;