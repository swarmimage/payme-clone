import React from "react";
import "./Payment.scss";
import Payments from "../payments/Payments.jsx";
import { IconSearch, IconList, IconMobile, IconGlobe, IconHome } from "../icons/Icons.jsx";

const services = [
  { id: 1, icon: IconList, badge: "1%", title: "Популярное" },
  { id: 2, icon: IconMobile, badge: "до 1.5%", title: "Мобильные операторы" },
  { id: 3, icon: IconGlobe, badge: "1%", title: "Интернет-провайдеры" },
  { id: 4, icon: IconHome, badge: "1%", title: "Коммунальные услуги" },
];

const nearby = [
  { id: 1, title: "Рядом со мной", subtitle: "Магазины и кафе рядом с вами" },
  { id: 2, title: "По QR-коду", subtitle: "Оплата в одно касание" },
];

const Payment = () => {
  return (
    <div className="payment">
      <div className="payment__container">
        <h1 className="payment__title">Оплата</h1>

        <div className="payment__search">
          <IconSearch />
          <input type="text" placeholder="Найти" />
        </div>

        <div className="payment__section">
          <div className="payment__section-top">
            <h3>Сохраненные платежи</h3>
            <span>Все</span>
          </div>
          <Payments />
        </div>

        <div className="payment__section">
          <div className="payment__section-top">
            <h3>Оплата услуг</h3>
            <span>Все</span>
          </div>
          <div className="payment__grid">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div className="payment__grid-item" key={s.id}>
                  <span className="payment__grid-badge">{s.badge}</span>
                  <Icon />
                  <p>{s.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="payment__home">
          <h3>Мой дом</h3>
          <div className="payment__home-card">
            <div>
              <p className="payment__home-card-title">Добавьте «Мой дом»</p>
              <p className="payment__home-card-text">
                Все платежи для вашего дома в одном месте
              </p>
            </div>
            <button type="button">Добавить</button>
          </div>
        </div>

        <div className="payment__section payment__section--last">
          <div className="payment__section-top">
            <h3>Оплата на местах</h3>
            <span>Все</span>
          </div>
          <div className="payment__list">
            {nearby.map((n) => (
              <div className="payment__list-row" key={n.id}>
                <p className="payment__list-row-title">{n.title}</p>
                <p className="payment__list-row-text">{n.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
