import React, { useState, useEffect } from 'react';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import "./App.css";

const dummyList = [
  {
    id: 1,
    author: "아아",
    content: "아아아아아",
    emotion: 5,
    created_date: new Date().getTime()
  },
  {
    id: 2,
    author: "아아2",
    content: "아아아아아2",
    emotion: 3,
    created_date: new Date().getTime()
  },
  {
    id: 3,
    author: "아아3",
    content: "아아아아아3",
    emotion: 1,
    created_date: new Date().getTime()
  },
]

function App() {
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

DiaryList.defaultProps={ //리스트에 아무것도 없을 경우 DiaryList를 빈배열로
  diaryList: [],
}

export default App;
