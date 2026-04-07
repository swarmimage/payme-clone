import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const banners = [
  { id: 1, img: '/Group12.svg' },
  { id: 2, img: '/Group13.svg' },
  { id: 3, img: '/Group14.svg' },
]

const Payments = () => {
  return (
    <Swiper
      direction="horizontal"
      slidesPerView={3}
      slidesPerGroup={1}
      spaceBetween={10}
      initialSlide={0}
      autoHeight={true}
      loop={false}
      effect="slide"
      speed={300}
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <img src={banner.img} alt="" style={{ width: '100%', borderRadius: '16px' }} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Payments