import React, {useState, useRef} from 'react';

const DiaryItem = ({
    onEdit,
    onRemove, 
    author, 
    content, 
    created_date, 
    emotion, 
    id
}) => {

    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => setIsEdit(!isEdit); //toggleIsEdit이 호출되면 IsEdit값을 반전시킨다

    const [localContent, setLocalContent] = useState(content); //content를 기본값으로 해서 수정하기 누르면 원본 값이 나온다
    const localContentInput = useRef();

    const handleRemove = () => {
        if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
            onRemove(id);
        }
    };

    const handleQuitEdit = () => { //수정 취소 시 값을 되돌리는 함수
        setIsEdit(false);
        setLocalContent(content);
    }

    const handleEdit = () => {
        if(localContent.length < 5) {
            localContentInput.current.focus();
            return;
        }

        if(window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) {
            onEdit(id, localContent)
            toggleIsEdit();
        }
    }

    return (
    <div className="DiaryItem">
        <div className="info">
            <span>
                작성자 : {author} | 감정점수 : {emotion}
            </span>
            <br />
            <span className="date">{new Date(created_date).toLocaleString()}</span>
        </div>
        <div className="content">
            {isEdit ? (
            <>
            <textarea
            ref={localContentInput}
            value={localContent}
            onChange={(e) => setLocalContent(e.target.value)}/>
            </>
            ) : <>{content}</> }
        </div>
        {isEdit ? ( //수정하기 버튼을 눌렀을 때와 아닐 때 각각 다른 버튼 출력
        <>
                <button onClick={handleQuitEdit}>수정 취소</button>
                <button onClick={handleEdit}>수정 완료</button>
        </>
        ) : ( 
        <>
        <button onClick={handleRemove}>삭제하기</button>
        <button onClick={toggleIsEdit}>수정하기</button>
        </>
        )}
    </div>
    );
};

export default DiaryItem;