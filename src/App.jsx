import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Transfer from "./pages/Transfer";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="/transfer" element={<Transfer/>}/>
      </Routes>
    </div>
  );
};

export default App;