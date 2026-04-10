import React from "react";
import './Footer.scss'

const items = [
  { id: 1, text: "Главная", img: "./footer/home.svg" },
  { id: 2, text: "Переводы", img: "./footer/arrow.svg" },
  { id: 3, text: "Оплата", img: "./footer/wallet.svg" },
  { id: 4, text: "Сервисы", img: "./footer/square.svg" },
  { id: 5, text: "Мониторинг", img: "./footer/history.svg" },
];

const Footer = () => {
  return (
    <div className="footer">

      {items.map((i) => (
        <div className="footer_wrapper">
          <div className="footer_wrapper-box">
            <img src={i.img} alt="" />
            <p>{i.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
