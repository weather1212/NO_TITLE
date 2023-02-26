import React from 'react';

const WritePage = () => {

    const clickHandle = ()=>{
        let post ={id :3, title :"인풋값"};
        // setPost()
    }

    return (
        <div>
            <h1>글쓰기 페이지</h1>
            <form>
                <input type={"text"} placeholder={"제목을 입력하세요"} />
                <button type={"button"} onClick={clickHandle}>글쓰기</button>
            </form>
        </div>
    );
};

export default WritePage;