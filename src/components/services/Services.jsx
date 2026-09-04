import React from "react";
import "./Services.scss";
import {
  IconBus,
  IconClockCoin,
  IconTag,
  IconShield,
  IconPlane,
  IconTicket,
  IconDoc,
} from "../icons/Icons.jsx";

const services = [
  {
    id: 1,
    icon: IconBus,
    color: "#1ababa",
    title: "Метро и автобус",
    subtitle: "Простая оплата прямо в payme",
  },
  {
    id: 2,
    icon: IconClockCoin,
    color: "#1ababa",
    title: "Оплатить позже",
    subtitle: "Платите сейчас — вернёте потом",
  },
  {
    id: 3,
    icon: IconTag,
    color: "#17e1ff",
    title: "payme plus",
    subtitle: "Переводы без комиссии и другие бонусы подписки",
  },
  {
    id: 4,
    icon: IconShield,
    color: "#4fc3c3",
    title: "Штрафы MIB",
    subtitle: "Проверка и оплата штрафов",
  },
  {
    id: 5,
    icon: IconPlane,
    color: "#f2c94c",
    title: "Авиабилеты с кешбэком 15%",
    subtitle: "10% — по тарифу «Всё включено» payme plus, и ещё 5% за TBC Salom",
  },
  {
    id: 6,
    icon: IconTicket,
    color: "#f2994a",
    title: "payme tickets",
    subtitle: "Покупка билетов на различные мероприятия",
  },
  {
    id: 7,
    icon: IconDoc,
    color: "#4fc3c3",
    title: "Оплата на расчётный счёт",
    subtitle: "Для юридических лиц и ИП",
  },
];

const Services = () => {
  return (
    <div className="services">
      <div className="services__container">
        <h1 className="services__title">Сервисы</h1>

        <div className="services__list">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div className="services__row" key={s.id}>
                <div className="services__row-icon" style={{ color: s.color }}>
                  <Icon />
                </div>
                <div className="services__row-text">
                  <p className="services__row-title">{s.title}</p>
                  <p className="services__row-subtitle">{s.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
