import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import "./App.css";

function App() {
  const [data, setData] = useState([]); //Reat는 단방향 통신이므로 App.js 부모 컴포넌트를 통해 List를 갱신

  const dataId = useRef(0);

  const getDate = async () => {
    //데이터를 가져오는 함수
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((rest) => rest.json());
    const initDate = res.slice(0, 20).map((it) => {
      //20개를 뽑아서 일괄처리
      return {
        author: it.emial,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1, //1부터 5사이의 랜덤한 수
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    setData(initDate);
  };

  useEffect(() => {
    getDate();
  }, []);

  const onCreate = useCallback((author, content, emotion) => {
    //새로운 일기를 추가하는 함수
    //useMemo는 값을 반환하므로 useCallbak을 사용한다
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current + 1, //id를 1부터 시작하게 하였다
    };
    dataId.current += 1; //리스트 번호를 1증가
    setData((data) => [newItem, ...data]); //새로운 리스트를 앞에 오게 한다
    //함수형 업데이트
  }, []);

  const onRemove = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId); //타겟 id가 아닌 데이터만 남긴다
    setData(newDiaryList); //리스트 삭제
  };

  const onEdit = (targetId, newContent) => {
    //특정 일기 Data를 배열에서 수정한다 : 수정한 배열은 수정이 완료된 배열을 setData에 넣는다
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      ) //각각 모든 요소들이 target id와 일치하는지 확인 > 일치하면 수정된 배열 반영, 불일치는 원래대로
    );
  };

  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]); //data.length가 변화할 때만 콜백함수가 다시 수행

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis; //함수가 아니라 값으로 사용해야 한다

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 좋은 일기 개수 : {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio}</div>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

DiaryList.defaultProps = {
  //리스트에 아무것도 없을 경우 DiaryList를 빈배열로
  diaryList: [],
};

export default App;
