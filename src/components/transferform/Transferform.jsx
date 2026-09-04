import React from "react";
import "./Transferform.scss";
import { Link } from "react-router-dom";
import {
  IconInfo,
  IconScan,
  IconChevronRight,
  IconPhone,
  IconCard2,
  IconGift,
  IconPlus,
} from "../icons/Icons.jsx";

const recipients = [
  { id: 1, initials: "KA", name: "Khusniddin A.", color: "#a98bd6" },
  { id: 2, initials: "TS", name: "Tolaganov S.", color: "#4fc3c3" },
  { id: 3, initials: "AS", name: "Abkadirov S.", color: "#b9d15a" },
  { id: 4, initials: "JT", name: "Jaloliddin T.", color: "#4fa96b" },
];

const Transferform = () => {
  return (
    <div className="transfer">
      <div className="transfer__container">
        <div className="transfer__header">
          <h1>Перевод средств</h1>
          <button type="button" className="transfer__header-info">
            <IconInfo />
          </button>
        </div>

        <div className="transfer__to">
          <h3>Кому:</h3>
          <span className="transfer__to-label">Номер карты или телефона</span>
          <div className="transfer__to-input">
            <IconCard2 />
            <input type="text" placeholder="Номер карты или телефона" />
            <button type="button" aria-label="Сканировать">
              <IconScan />
            </button>
          </div>
        </div>

        <div className="transfer__recipients">
          {recipients.map((r) => (
            <div className="transfer__recipients-item" key={r.id}>
              <div className="transfer__recipients-avatar" style={{ background: r.color }}>
                {r.initials}
                <span className="transfer__recipients-badge">✓</span>
              </div>
              <p>{r.name}</p>
            </div>
          ))}
        </div>

        <button type="button" className="transfer__all">
          Все получатели
        </button>

        <div className="transfer__menu">
          <div className="transfer__menu-row">
            <IconPhone className="transfer__menu-icon" />
            <p>По номеру телефона</p>
            <IconChevronRight className="transfer__menu-chevron" />
          </div>
          <Link to="/transfer/card" className="transfer__menu-row">
            <IconCard2 className="transfer__menu-icon" />
            <p>Перевод на мою карту</p>
            <IconChevronRight className="transfer__menu-chevron" />
          </Link>
        </div>

        <div className="transfer__menu">
          <div className="transfer__menu-row">
            <IconGift className="transfer__menu-icon" />
            <p>Добавить открытку</p>
            <IconPlus className="transfer__menu-chevron" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transferform;
