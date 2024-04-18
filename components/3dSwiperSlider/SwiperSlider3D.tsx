"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import style from "./SwiperSlider.module.css"

const SwiperSlider3D = () => {
  return (
    <div className={style["container"] + " relative w-full "}>
      <h1 className={style["heading"] + " font-bold"}>Nos Expertises</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: `.${style["swiper-pagination"]}`, clickable: true }}
        navigation={{
          nextEl: `.${style["swiper-button-next"]}`,
          prevEl: `.${style["swiper-button-prev"]}`,
          enabled: true
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={style["swiper_container"] + " w-full h-[40rem] sm:h-[44rem] md:min-h-[50rem] overflow-hidden py-[2rem] relative"}
      >
        <SwiperSlide key={1} className={style["swiper-slide"] + " !w-[17rem] !h-[30rem]   sm:!w-[25rem] sm:!h-[35rem] "}>
          <img src={"/aspenGlass.jpg"} className='w-full h-full object-cover' alt="slide_image" />
        </SwiperSlide>

        <SwiperSlide key={1} className={style["swiper-slide"] + " !w-[16rem] !h-[30rem]   sm:!w-[25rem] sm:!h-[35rem] "}>
          <img src={"/aspenGlass.jpg"} className='w-full h-full object-cover' alt="slide_image" />
        </SwiperSlide>

        <SwiperSlide key={1} className={style["swiper-slide"] + " !w-[16rem] !h-[30rem]   sm:!w-[25rem] sm:!h-[35rem] "}>
          <img src={"/aspenGlass.jpg"} className='w-full h-full object-cover' alt="slide_image" />
        </SwiperSlide>

        <SwiperSlide key={1} className={style["swiper-slide"] + " !w-[16rem] !h-[30rem]   sm:!w-[25rem] sm:!h-[35rem] "}>
          <img src={"/aspenGlass.jpg"} className='w-full h-full object-cover' alt="slide_image" />
        </SwiperSlide>

        <SwiperSlide key={1} className={style["swiper-slide"] + " !w-[16rem] !h-[30rem]   sm:!w-[25rem] sm:!h-[35rem] "}>
          <img src={"/aspenGlass.jpg"} className='w-full h-full object-cover' alt="slide_image" />
        </SwiperSlide>

        <SwiperSlide key={1} className={style["swiper-slide"] + " !w-[16rem] !h-[30rem]   sm:!w-[25rem] sm:!h-[35rem] "}>
          <img src={"/aspenGlass.jpg"} className='w-full h-full object-cover' alt="slide_image" />
        </SwiperSlide>

        

        <div className={style["slider-controler"] + " z-10 !w-[90vw] mx-auto"}>
          <div className={`${style["swiper-button-prev"]} invisible sm:visible text-black flex justify-center items-center text-2xl ${style["slider-arrow"]}`}>
            <BsArrowLeft />
          </div>

          <div className={" swiper-pagination " + style["swiper-pagination"]}>
          </div>

          <div className={`${style["swiper-button-next"]} invisible sm:visible text-black flex justify-center items-center text-2xl ${style['slider-arrow']}`}>
            <BsArrowRight />
          </div>
        </div>
      </Swiper>
    </div>
  )
}

export default SwiperSlider3D