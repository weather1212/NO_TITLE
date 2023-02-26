import React from 'react';
import Navigation from "./Components/Navigation";
import ListPage from "./Pages/ListPage";
import WritePage from "./Pages/WritePage";
import {Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <div>
            <Navigation/>
            <Routes>
            <Route path="/" eact={true} element={<ListPage/>}/>
            <Route path="/write" eact={true} element={<WritePage/>}/>
            </Routes>
        </div>
    );
};

export default App;