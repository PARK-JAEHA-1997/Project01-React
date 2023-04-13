import DiaryItem from "./DiaryItem";

const DiaryList = ({ onEdit, onRemove, diaryList }) => {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map(
          (
            it //it, idx도 가능하지만 순서가 바뀔 때 꼬일 수 있을 가능성
          ) => (
            <DiaryItem
              key={it.id}
              {...it}
              onEdit={onEdit}
              onRemove={onRemove}
            /> //고유한 key 설정
          )
        )}
      </div>
    </div>
  );
};

export default DiaryList;
