import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import "./component/main.css";
//fonts 
import "./fonts/FUTURA45LIGHT.TTF"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;