import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Home from "./Home";
import MADE from "./MADE";
import Sloth from "./Sloth";
import Hercules from "./Hercules";
import Sagrada from "./Sagrada";
import Arfe from "./Arfe";


function App() {
  return (
      <Router>
        <GlobalStyle />
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/MADE" exact element={<MADE/>} />
            <Route path="/sloth" exact element={<Sloth/>} />
            <Route path="/arfe" exact element={<Arfe/>} />
            <Route path="/hercules" element={<Hercules/>} />
            <Route path="/sagrada-familia" element={<Sagrada/>}/>
        </Routes>
      </Router>
  );
}

export default App;
