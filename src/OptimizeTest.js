import React, { useState, useEffect } from "react";

const CounterA = React.memo(({ count }) => {
  //A버튼은 눌러도 count가 그대로다 : 1에서 1로 바뀜 = 변경된 것이 없음
  useEffect(() => {
    console.log(`CounterA Update - count : ${count}`);
  });
  return <div>{count}</div>;
});

const CounterB = ({ obj }) => {
  //porp이 객체이기 때문에 (얕은 비교) 변화된다
  useEffect(() => {
    console.log(`CounterB Update - count : ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

const areEqual = (prevProps, nextProps) => {
  if (prevProps.obj.count === nextProps.obj.count) {
    // return true; 이전 Porps와 현재 Props가 같다 > 리렌더링을 하지 마라
    //}
    //return false; 이전 Porps와 현재 Props가 다르다 > 리렌더링을 해라
    return prevProps.obj.count === nextProps.obj.count;
  }
};

const MemorizedCounterB = React.memo(CounterB, areEqual); //CounterB는 areEqual의 판단에 따라 리렌더링 여부가 결정

const OptimizeTest = () => {
  //컴포넌트를 재사용하는 실습용

  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemorizedCounterB obj={obj} />
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }
        >
          B Button
        </button>
      </div>
    </div>
  );
};

export default OptimizeTest;
