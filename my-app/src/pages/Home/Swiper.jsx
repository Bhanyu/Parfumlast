import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Virtual, Controller,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import styles from "../Home/home.module.scss"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css/virtual';
import 'swiper/css/controller';
import 'swiper/css/autoplay';
const SwiperComponent = () => {
  const [slides, setSlides] = useState([]);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const URL = "http://localhost:4000/slides";

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setSlides(data);
      });
  }, [URL]);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleNext = () => {
    if (controlledSwiper) {
      if (controlledSwiper.activeIndex === slides.length - 1) {
        controlledSwiper.slideTo(0,0);
           } else {
             controlledSwiper.slideNext();
           }
         }
       };
       const handlePrev = () => {
         if (controlledSwiper) {
           if (controlledSwiper.activeIndex === 0) {
             controlledSwiper.slideTo(slides.length - 1,0);
           } else {
             controlledSwiper.slidePrev();
           }
         }
       };
     
       return (
       <section id={styles.swiperpart}>
           <div className={styles.swipercontainer}>
           <Swiper
             modules={[Navigation, Pagination, Scrollbar, A11y, Virtual, Autoplay ,Controller]}
             spaceBetween={50}
             slidesPerView={1}
             navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
             pagination={{ clickable: true }}
           
             virtual
             autoplay={{ delay: 4000, disableOnInteraction: false }}
             onSwiper={setControlledSwiper}
             onSlideChange={() => console.log('slide change')}
             loop={false}
           >
             {slides.map((slide, index) => (
               <SwiperSlide key={slide.id} virtualIndex={index}>
                 <div  className={styles.swiperslide} style={{borderRadius: '10px' }}>
                 {isMobile ? (
                       slide.imgMobile && <img className={styles.slideimg} src={slide.imgMobile} alt={slide.model} />
                     ) : (
                       slide.img && <img className={styles.slideimg} src={slide.img} alt={slide.model} />
                     )}
                   
                 </div>
               </SwiperSlide>
             ))}
           </Swiper>
           <button className={styles.swiperbuttonprev} onClick={handlePrev}><FaArrowLeft /></button>
           <button className={styles.swiperbuttonnext} onClick={handleNext}><FaArrowRight /></button>
         </div>
       </section>
       );
     };
     
     export default SwiperComponent;
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
   




