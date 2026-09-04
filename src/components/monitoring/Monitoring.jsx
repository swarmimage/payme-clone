import React from "react";
import "./Monitoring.scss";
import { IconPie, IconDownload, IconChevronDown } from "../icons/Icons.jsx";

const groups = [
  {
    id: 1,
    date: "3 сентября 2026 г.",
    total: "-42 500.00 сум",
    items: [
      {
        id: 1,
        name: "Pyatorka Plus",
        category: "продукты",
        categoryClass: "green",
        amount: "-10 000 сум",
        time: "21:44",
        logo: "5",
        logoClass: "logo-red",
      },
      {
        id: 2,
        name: "Visa Direct",
        category: "перевод",
        categoryClass: "teal",
        amount: "-32 500 сум",
        time: "21:25",
        logo: "VISA",
        logoClass: "logo-white",
      },
    ],
  },
  {
    id: 2,
    date: "2 сентября 2026 г.",
    total: "-6 000.00 сум",
    items: [
      {
        id: 3,
        name: "Tez Qr",
        category: "прочее",
        categoryClass: "gray",
        amount: "-5 000 сум",
        time: "13:19",
        logo: "QR",
        logoClass: "logo-orange",
      },
      {
        id: 4,
        name: "Pyatorka Plus",
        category: "продукты",
        categoryClass: "green",
        amount: "-1 000 сум",
        time: "13:15",
        logo: "5",
        logoClass: "logo-red",
      },
    ],
  },
  {
    id: 3,
    date: "31 августа 2026 г.",
    total: "-13 490.00 сум",
    items: [
      {
        id: 5,
        name: "XALQ RETAIL",
        category: "магазин",
        categoryClass: "green",
        amount: "-13 490 сум",
        time: "19:09",
        logo: "X",
        logoClass: "logo-lime",
      },
    ],
  },
];

const Monitoring = () => {
  return (
    <div className="monitoring">
      <div className="monitoring__container">
        <div className="monitoring__header">
          <h1>Мониторинг</h1>
          <div className="monitoring__header-actions">
            <button type="button">
              <IconPie />
            </button>
            <button type="button">
              <IconDownload />
            </button>
          </div>
        </div>

        <div className="monitoring__filters">
          <button type="button" className="monitoring__filters-chip active">
            Период <IconChevronDown />
          </button>
          <button type="button" className="monitoring__filters-chip">
            Категории <IconChevronDown />
          </button>
          <button type="button" className="monitoring__filters-chip">
            Карты и счета <IconChevronDown />
          </button>
        </div>

        <div className="monitoring__summary">
          <div>
            <p className="monitoring__summary-label">Доходы за сентябрь</p>
            <p className="monitoring__summary-value income">+0 сум</p>
          </div>
          <div>
            <p className="monitoring__summary-label">Расходы за сентябрь</p>
            <p className="monitoring__summary-value expense">-48 500 сум</p>
          </div>
        </div>

        {groups.map((g) => (
          <div className="monitoring__group" key={g.id}>
            <div className="monitoring__group-header">
              <span>{g.date}</span>
              <span>{g.total}</span>
            </div>
            {g.items.map((it) => (
              <div className="monitoring__item" key={it.id}>
                <div className={`monitoring__item-logo ${it.logoClass}`}>{it.logo}</div>
                <div className="monitoring__item-info">
                  <p className="monitoring__item-name">{it.name}</p>
                  <span className={`monitoring__item-tag ${it.categoryClass}`}>
                    {it.category}
                  </span>
                </div>
                <div className="monitoring__item-amount">
                  <p>{it.amount}</p>
                  <span>{it.time}</span>
                </div>
              </div>
            ))}
          </div>
        ))}

        <button type="button" className="monitoring__cta">
          Получить больше возможностей <span>›</span>
        </button>
      </div>
    </div>
  );
};

export default Monitoring;
