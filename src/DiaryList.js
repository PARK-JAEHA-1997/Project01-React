import { useContext } from "react";
import DiaryItem from "./DiaryItem";
import { DiaryStateContext } from "./App";

const DiaryList = () => {
  const diaryList = useContext(DiaryStateContext); //Context에서 가져오기 때문에 더이상 App컴포넌트에서 DiaryList 값을 prop으로 전달할 필요가 없어진다
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map(
          (
            it //it, idx도 가능하지만 순서가 바뀔 때 꼬일 수 있을 가능성
          ) => (
            <DiaryItem key={it.id} {...it} /> //고유한 key 설정
          )
        )}
      </div>
    </div>
  );
};

export default DiaryList;
