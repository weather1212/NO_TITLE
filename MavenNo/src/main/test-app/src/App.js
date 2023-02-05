import React from "react";


import {
    BrowserRouter as Router,
    Routes,
    Route,

} from 'react-router-dom';

import LandingPage from './Components/LandingPage/LandingPage';
import HomePage from "./Components/Pages/HomePage";
import Header from "./Components/header";
export default function App(){
  return(
      <div>
          <Header/>

          <Routes>
              <Route path="/" exact={true} element={<HomePage/>}/>
              <Route  path="/Landing" exact={true} element={<LandingPage /> } />
          </Routes>
                  {/*<HomePage/>*/}
      </div>
      // <Router>
      //
      //   <Routes>
      //     <Route  path="/" element={<LandingPage /> } />
      //   </Routes>
      //
      // </Router>
      )
}