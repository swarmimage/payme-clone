import React, { useState } from "react";
import "./CardTransfer.scss";
import { Link, useNavigate } from "react-router-dom";
import { IconChevronLeft, IconCard2, IconMoney } from "../icons/Icons.jsx";

const formatCardInput = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(.{4})/g, "$1 ").trim();
};

const formatAmountInput = (value) => {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "";
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

const CardTransfer = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const cardDigits = cardNumber.replace(/\s/g, "");
  const amountValue = Number(amount.replace(/\s/g, ""));
  const isValid = cardDigits.length === 16 && amountValue > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) {
      setError(
        cardDigits.length !== 16
          ? "Введите полный номер карты (16 цифр)"
          : "Введите сумму перевода"
      );
      return;
    }

    const now = new Date();

    navigate("/transfer/receipt", {
      state: {
        cardNumber: cardDigits,
        amount: amountValue,
        comment: comment.trim(),
        date: now.toLocaleDateString("ru-RU", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        time: now.toLocaleTimeString("ru-RU", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        operationId: Math.floor(100000000 + Math.random() * 900000000),
      },
    });
  };

  return (
    <div className="card-transfer">
      <div className="card-transfer__container">
        <div className="card-transfer__header">
          <Link to="/transfer" className="card-transfer__header-back" aria-label="Назад">
            <IconChevronLeft />
          </Link>
          <h1>Перевод на карту</h1>
        </div>

        <form className="card-transfer__form" onSubmit={handleSubmit}>
          <label className="card-transfer__field">
            <span>Номер карты получателя</span>
            <div className="card-transfer__field-input">
              <IconCard2 />
              <input
                type="text"
                inputMode="numeric"
                placeholder="0000 0000 0000 0000"
                value={cardNumber}
                onChange={(e) => {
                  setError("");
                  setCardNumber(formatCardInput(e.target.value));
                }}
              />
            </div>
          </label>

          <label className="card-transfer__field">
            <span>Сумма перевода</span>
            <div className="card-transfer__field-input">
              <IconMoney />
              <input
                type="text"
                inputMode="numeric"
                placeholder="0"
                value={amount}
                onChange={(e) => {
                  setError("");
                  setAmount(formatAmountInput(e.target.value));
                }}
              />
              <span className="card-transfer__field-suffix">сум</span>
            </div>
          </label>

          <label className="card-transfer__field">
            <span>Комментарий (необязательно)</span>
            <div className="card-transfer__field-input">
              <input
                type="text"
                placeholder="Например, за подарок"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
          </label>

          {error && <p className="card-transfer__error">{error}</p>}

          <button type="submit" className="card-transfer__submit" disabled={!isValid}>
            Перевести
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardTransfer;
