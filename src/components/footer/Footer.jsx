import React from "react";
import './Footer.scss'
import { Link, useLocation } from "react-router-dom";

const items = [
  { id: 1, text: "Главная", img: "/footer/home.svg", to: "/" },
  { id: 2, text: "Перевод", img: "/footer/arrow.svg", to: "/transfer" },
  { id: 3, text: "Оплата", img: "/footer/wallet.svg", to: "/payment" },
  { id: 4, text: "Сервисы", img: "/footer/square.svg", to: "/services" },
  { id: 5, text: "Мониторинг", img: "/footer/history.svg", to: "/monitoring" },
];

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <div className="footer">
      {items.map((i) => {
        const active =
          i.to === "/" ? pathname === "/" : pathname.startsWith(i.to);
        return (
          <Link to={i.to} key={i.id} className="footer_wrapper">
            <div className={`footer_wrapper-box${active ? " active" : ""}`}>
              <img src={i.img} alt="" />
              <p>{i.text}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Footer;
