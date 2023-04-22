import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Addposting from "./components/Addposting";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/addposting" element={<Addposting />} />
          <Route path="/login" element={<Login />} />
        </>
      </Routes>
    </Router>
  );
};

export default App;
