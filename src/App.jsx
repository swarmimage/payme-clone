import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Transfer from "./pages/Transfer";
import Payment from "./pages/Payment";
import Services from "./pages/Services";
import Monitoring from "./pages/Monitoring";
import CardTransfer from "./pages/CardTransfer";
import Receipt from "./pages/Receipt";
import Footer from "./components/footer/Footer.jsx";

const App = () => {
  return (
    <div className="app-shell">
      <div className="app-shell__content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/transfer" element={<Transfer/>}/>
          <Route path="/transfer/card" element={<CardTransfer/>}/>
          <Route path="/transfer/receipt" element={<Receipt/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/monitoring" element={<Monitoring/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default App;