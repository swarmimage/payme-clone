import React from "react";
import "./Paytmentscard.scss";

const photos = [
  { id: 1, img: "./ucell.svg", text: "Мой номер", number: "+998909344385"},
  { id: 2, img: "./uzmb.svg", text: "UMS", number: '+998909344385',  },
  { id: 3, img: "./mobiuz.svg", text: "Мой номер", number: "+998919342345" },
];
const Paytmentscard = () => {
  return (
    <div className="body">
      {photos.map((i) => (
        <div className="patmentscard" key={i.id}> {/* Добавь key! */}
          <div className="patmentscard_wrapper">
            <div className="patmentscard_wrapper-top">
              <p>1%</p>
              <img src={i.img} alt="" />
            </div>
            <div className="patmentscard_wrapper-bottom">
              <h1>{i.text}</h1>
              <p>{i.number}</p>
            </div>
          </div>
        </div>
      ))} 
    </div>
  );
};

export default Paytmentscard;
