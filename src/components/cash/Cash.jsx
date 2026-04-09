import React from "react";
import "./Cash.scss";
import HomeContent from "../home/Home";

const Cash = () => {
  return <div className="cashback">
    <div className="cashback_wrapper">
      <p className="cashback_wrapper-text">
        50 000 кешбэка доступно с <span> <img src="/meplus.svg" alt="" /> </span>
      </p>
    </div>
    <HomeContent/>
  </div>;
};

export default Cash;
