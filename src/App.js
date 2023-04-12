import React, { useState, useRef } from 'react';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import "./App.css";


// const dummyList = [
//   {
//     id: 1,
//     author: "아아",
//     content: "아아아아아",
//     emotion: 5,
//     created_date: new Date().getTime()
//   },
//   {
//     id: 2,
//     author: "아아2",
//     content: "아아아아아2",
//     emotion: 3,
//     created_date: new Date().getTime()
//   },
//   {
//     id: 3,
//     author: "아아3",
//     content: "아아아아아3",
//     emotion: 1,
//     created_date: new Date().getTime()
//   },
// ]

function App() {
  const [data, setData] = useState([]); //Reat는 단방향 통신이므로 App.js 부모 컴포넌트를 통해 List를 갱신
 
  const dataId = useRef(0)

  const onCreate = (author, content, emotion) => { //새로운 일기를 추가하는 함수
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    };
    dataId.current += 1; //리스트 번호를 1증가
    setData([newItem, ...data]); //새로운 리스트를 앞에 오게 한다
  };

const onRemove = (targetId) => {
  console.log(`${targetId}가 삭제되었습니다.`);
  const newDiaryList = data.filter((it)=>it.id !== targetId); //타겟 id가 아닌 데이터만 남긴다
  setData(console.log(newDiaryList)); //리스트 삭제
}

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onRemove={onRemove} diaryList={data}/>
    </div>
  );
}

DiaryList.defaultProps={ //리스트에 아무것도 없을 경우 DiaryList를 빈배열로
  diaryList: [],
}

export default App;
