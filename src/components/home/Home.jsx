import React, { useState, useEffect } from "react";
import "./Home.scss";
import BannerSlider from "../swiper/BannerSlider.jsx";
import Payments from "../payments/Payments.jsx";

const HomeContent = () => {
  return (
    <div className="home">
      <div className="container">
        <BannerSlider/>
        <div className="home__transfer">
          <h3>Перейти к переводам</h3>
          <div className="home__transfer-input">
            <img src="/input-card.svg" alt="" />
            <input type="text" placeholder="Номер карты или телефона" />
            <img src="/input-qr.svg" alt="" />
          </div>
        </div>

        <div className="home__payments">
          <div className="home__payments-top">
            <h3>Сохраненные платежи</h3>
            <span>Все</span>
          </div>
          <div className="home__payments-list">
            <Payments/>
          </div>
        </div>

        <div className="saved">
          <div className="saved__top">
            <h3>Мой дом</h3>
          </div>
          <div className="saved__card">
            <img src="./saved.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
