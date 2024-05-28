// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../components/SectionTitle";

const Category = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <SectionTitle heading={"order online"} subHeading={"---From 11:00am to 10:00pm---"} ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper my-12"
      >
        <SwiperSlide>
          {" "}
          <img className="w-full h-full" src={slide1} alt="" />
          <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-2xl md:text-3xl font-semibold text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img className="w-full h-full" src={slide2} alt="" />
          <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-2xl md:text-3xl font-semibold text-white">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img className="w-full h-full" src={slide3} alt="" />
          <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-2xl md:text-3xl font-semibold text-white">
            Desert
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img className="w-full h-full" src={slide4} alt="" />
          <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-2xl md:text-3xl font-semibold text-white">
            Pastry
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img className="w-full h-full" src={slide5} alt="" />
          <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-2xl md:text-3xl font-semibold text-white">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
