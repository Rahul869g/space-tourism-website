import { useState } from "react";

import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/destination" element={<Destination />}></Route>
          <Route exact path="/crew" element={<Crew />}></Route>
          <Route exact path="/technology" element={<Technology />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
