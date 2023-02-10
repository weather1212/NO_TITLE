import React from 'react';

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
    let a = 10;
    const b = 20;
    const mystyle = {
        color: 'red',
    };

    return (
        <div>
            <div style={mystyle}>
                안녕{a === 10 ? '10입니다.' : '10이 아닙니다.'}
            </div>
            <h1>헤더{b === 10 && '20입니다.'}</h1>
        </div>
    );
}
