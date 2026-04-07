import React from "react";
import "./Hero.scss";
import Cash from "../cash/Cash";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__top">
          <div className="hero__top-account">
            <p>SA</p>
          </div>
          <div className="hero__top-links">
            <img className="hero__top-links-animated" src="/head.svg" alt="" />
            <img src="/Search.svg" alt="" />
            <img src="/Notification.svg" alt="" />
          </div>
        </div>

        <div className="hero__mid">
          <p>Общий баланс</p>
          <div className="hero__mid-money">
            <img src="/eye.svg" alt="" />
            <p>3 033 753</p>
            <p className="hero__mid-money-valut"></p>
            <img src="/dots.svg" alt="" />
          </div>
          <p>Расход за апрель - 154 556 сум</p>
        </div>

        <div className="hero__actions">
          <div className="hero__actions-item">
            <div className="hero__actions-icon">
              <img src="/card.svg" alt="" />
            </div>
            <p>Мои карты</p>
          </div>
          <div className="hero__actions-item">
            <div className="hero__actions-icon">
              <img src="/go.svg" alt="" />
            </div>
            <p>Payme Go</p>
          </div>
          <div className="hero__actions-item">
            <div className="hero__actions-icon">
              <img src="/qr.svg" alt="" />
            </div>
            <p>QR оплата</p>
          </div>
        </div>
      </div>

        <Cash />
    </div>
  );
};

export default Hero;
