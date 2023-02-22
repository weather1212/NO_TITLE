import React, { useState } from 'react';

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
    console.log('App 실행');

    let sample = [
        { id: 1, name: '토마토' },
        { id: 2, name: '감자' },
        { id: 3, name: '오이' },
    ];

    const [users, setUsers] = useState(sample); //레퍼런스가 변경되어야 감지(레퍼런스가 동일하면 값이 변경되어도 동작X)
    // let number = 4;
    const [number, setNumber] = useState(users.length + 1);

    const download = () => {
        console.log('sample', sample);
        console.log('users', users);

        setUsers([...users, { id: number, name: '상추' }]);
        // number += 1;
        setNumber(number + 1);
    };

    return (
        <>
            <div style={mystyle}>
                안녕{a === 10 ? '10입니다.' : '10이 아닙니다.'}
            </div>
            <h1>헤더{b === 10 && '20입니다.'}</h1>
            <button onClick={download}>다운로드</button>
            {users.map((user) => {
                return (
                    <h1>
                        {user.id}, {user.name}
                    </h1>
                );
            })}
        </>
    );
}
