const DiaryList = ({diaryList}) => {
    return (
    <div className="DiaryList">
        <h2>일기 리스트</h2>
        <h4>{diaryList.length}개의 일기가 있습니다.</h4>
        <div>
            {diaryList.map((it) => (  //it, idx도 가능하지만 순서가 바뀔 때 꼬일 수 있을 가능성 
                <div key={it.id}> {/*고유한 key 설정*/}
                    <div>작성자: {it.author}</div>
                    <div>일기: {it.content}</div>
                    <div>감정: {it.emotion}</div>
                    <div>작성 시간(ms): {it.created_date}</div>
                </div>
            ))}
        </div>
    </div>
    )
};

export default DiaryList;