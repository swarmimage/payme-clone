import React from "react";
import "./Receipt.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IconCheck } from "../icons/Icons.jsx";

const maskCard = (card) => `**** ${card.slice(-4)}`;

const formatAmount = (amount) =>
  String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, " ");

const Receipt = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="receipt">
        <div className="receipt__container receipt__empty">
          <p>Нет данных о переводе</p>
          <Link to="/transfer" className="receipt__done">
            К переводам
          </Link>
        </div>
      </div>
    );
  }

  const { cardNumber, amount, comment, date, time, operationId } = state;

  return (
    <div className="receipt">
      <div className="receipt__container">
        <div className="receipt__status">
          <div className="receipt__status-icon">
            <IconCheck />
          </div>
          <h1>Перевод выполнен</h1>
          <p>Операция успешно завершена</p>
        </div>

        <p className="receipt__amount">{formatAmount(amount)} сум</p>

        <div className="receipt__card">
          <div className="receipt__card-row">
            <span>Дата</span>
            <span>{date}</span>
          </div>
          <div className="receipt__card-row">
            <span>Время</span>
            <span>{time}</span>
          </div>
          <div className="receipt__card-row">
            <span>Карта получателя</span>
            <span>{maskCard(cardNumber)}</span>
          </div>
          {comment && (
            <div className="receipt__card-row">
              <span>Комментарий</span>
              <span>{comment}</span>
            </div>
          )}
          <div className="receipt__card-row">
            <span>Номер операции</span>
            <span>{operationId}</span>
          </div>
          <div className="receipt__card-row">
            <span>Статус</span>
            <span className="receipt__card-status">Выполнено</span>
          </div>
        </div>

        <button
          type="button"
          className="receipt__done"
          onClick={() => navigate("/transfer")}
        >
          Готово
        </button>
      </div>
    </div>
  );
};

export default Receipt;
