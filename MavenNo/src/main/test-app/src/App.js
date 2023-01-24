import React from "react";


import {
    BrowserRouter as Router,
    Routes,
    Route,

} from 'react-router-dom';

import LandingPage from './Components/LandingPage/LandingPage';

export default function App(){
  return(
      <Router>

        <Routes>
          <Route exact path="/" component ={LandingPage} />
        </Routes>

      </Router>
  )
}