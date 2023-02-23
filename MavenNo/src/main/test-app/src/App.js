import React, { useCallback, useEffect, useState } from 'react';

// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,

// } from 'react-router-dom';

// import LandingPage from './Components/LandingPage/LandingPage';

// (1) return시 하나의 DOM만(요소) 리턴할 수 있음
// (2) 변수선언은 let, const 로만 해야함
// (3) if사용 불가능 -> 삼항연산자{조건?값(true):값(false)}
// (4) 조건부 랜더링 {조건 && 값(true)}
// (5) css 디자인
//    - 내부에 적는 방법
//    - 외부 파일에 적는 방법 (class 속성 -> className)
//    - 라이브러리 사용(bootstrap, component-styled)

export default function App() {
    let keyword = {
        id: 1,
        name: 'ee',
    };

    const [data, setData] = useState(0);
    const [search, setSearch] = useState(keyword);

    console.log('search', search);
    console.log('keyword', keyword);

    // useEffect 실행시점:
    // 1. App() 함수가 최초 실행될 때 (마운트될 때)
    // 2. 두번째 인자인 dependencyList에 등록된 상태변수가 변경될 때
    // (** useState와 다르게 레퍼런스 말고 데이터만 변경되어도 실행되는 듯 하다, 좀 더 찾아봐야할 듯)
    useEffect(() => {
        console.log('useEffect 실행됨');
        download();
    }, []);

    const download = () => {
        // const downloadData = 5;

        // setData(downloadData);

        keyword.name = '키워드'; // 데이터는 변경되었지만 레퍼런스가 동일해 useState감지x
        // keyword = { id: 1, name: '키워드' }; // 새로운 객체가 할당되면서 레퍼런스가 변경되어 useState 감지o
        setSearch(keyword);
    };

    return (
        <>
            <button onClick={download}>검색 : {search.name}</button>
            <h1>데이터: {data}</h1>
            <button
                onClick={() => {
                    setData(data + 1);
                }}
            >
                더하기
            </button>
        </>
    );
}
