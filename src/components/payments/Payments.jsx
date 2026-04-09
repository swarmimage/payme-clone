// Payments.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Payments.scss";

const photos = [
  { id: 1, img: "./ucell.svg",  text: "Мой номер", number: "+998909344385" },
  { id: 2, img: "./uzmb.svg",   text: "UMS",        number: "+998909344385" },
  { id: 3, img: "./mobiuz.svg", text: "Мой номер",  number: "+998919342345" },
];

const Payments = () => {
  return (
    <Swiper className="swiper-wrapper"
      direction="horizontal"
      slidesPerView={3}
      slidesPerGroup={1}
      spaceBetween={15}
      initialSlide={0}
      loop={false}
      speed={300}
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {photos.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="patmentscard">
            <div className="patmentscard_wrapper">
              <div className="patmentscard_wrapper-top">
                <p>1%</p>
                <img src={item.img} alt={item.text} />
              </div>
              <div className="patmentscard_wrapper-bottom">
                <h1>{item.text}</h1>
                <p>{item.number}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Payments;