import React from "react";
import bannerImage from "../../Assets/bannerPhoto.png";
import { sliderContent } from "../../Assets/sliderContent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "65vh",
        backgroundImage: `url(${bannerImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "constian",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        backgroundBlendMode: "darken",
        backgroundPosition: "center",
        marginTop: "1rem",
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {sliderContent.map((content) => (
          <SwiperSlide key={content.id} className="text-white">
            <div className="px-4 w-full  min-h-[400px] flex flex-col items-center justify-center">
              <div className="text-center">
                <h1 className="heading">{content.title}</h1>
                <p className="text-xs mt-4 mx-auto max-w-[300px]">
                  {content.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
