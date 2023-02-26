import React, {useState} from 'react';

const ListPage = () => {

    //최초데이터
    const[posts,setPosts] = useState([
        {ID : 1 , Title : "초기 test"},
        {ID : 2 , Title : "초기 test"}


    ]);




    return (
        <div>
            <h1>리스트 페이지 </h1>
            {posts.map((post)=>(
                <div>
                {post.ID} 제목 {post.Title}
                </div>
            ))}
            <button>삭제</button>
        </div>
    );
};

export default ListPage;