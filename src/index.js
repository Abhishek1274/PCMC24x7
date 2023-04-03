import React, { useState } from "react";
import ReactDOM from "react-dom";
//import l from "./components/Login";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import Login from "./components/Login";
import MapView from "./components/MapView";
import Tank from "./components/Tank";
// import handleSubmit from "./components/Login";
// import isLoggedIn from "./components/Login";

export default function App() {
    const [ isLoggedIn, setisLoggedIn] = useState(localStorage.getItem('isLoggedIn') ? JSON.parse(localStorage.getItem('isLoggedIn')) : false);
    return (
        
        <Router>
            <Routes>
                  <Route exact path="/" element={<Login auth={{isLoggedIn, setisLoggedIn}} />} />
                  <Route  path="/mapview" element={<MapView auth={{isLoggedIn, setisLoggedIn}} />} />
                  <Route  path="/tank_:id" element={<Tank auth={{isLoggedIn, setisLoggedIn}} />} />
            </Routes>
        </Router>


        
        
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
