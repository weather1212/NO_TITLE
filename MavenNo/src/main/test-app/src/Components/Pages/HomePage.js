import React, {useEffect, useState} from 'react';
import Home from '../home/Home'
const HomePage = () => {

    const[boards,setBoard] = useState([]);


    useEffect(()=>{

        let data  = [
            {id:1,title:"제목1",content:"내용1"},
            {id:2,title:"제목2",content:"내용2"},
            {id:3,title:"제목3",content:"내용3"},
        ];

        setBoard([...data]);
    },[])

    return <Home boards={boards}/>;


};

export default HomePage;