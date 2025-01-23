import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Typography } from "@material-tailwind/react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa"; // Import custom navigation icons

const images = [
    {
        src: "/slider1.jpg",
        alt: "slider 1",
        logo: "",
    },
    {
        src: "/slider5.png",
        alt: "slider 2",
        logo: "",
    },
    {
        src: "/slider3.jpg",
        alt: "slider 3",
        logo: "/shiaka-logo.png",
    },
    //   { src: '/slider4.jpg', alt: 'slider 4' },
    //   { src: '/slider5.jpg', alt: 'slider 5' },
];

export default function Slider() {
    return (
        <div className="relative">
            <Swiper
                pagination={{
                    dynamicBullets: false,
                }}
                navigation={{
                    nextEl: ".custom-next", // Define the next button
                    prevEl: ".custom-prev", // Define the prev button
                }}
                loop={true}
                autoplay={{ duration: 3000, disableOnInteraction:true }}
                modules={[Pagination, Navigation, EffectFade, Autoplay]}
                className="mySwiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            className=" w-[100%] h-[200px] md:h-[620px] mx-auto"
                        />
                        <div className="absolute bottom-0 w-[93%] h-full flex items-center justify-start ms-10">
                            {/* <Typography variant="" className="text-white w-[210px] md:w-[280px] lg:w-[310px] xl:w-[520px] tracking-wider slider-text xl:text-[2.50rem] text-center">
                {image.text}
              </Typography> */}
                            <img src={image.logo} className="text-white w-[210px] md:w-[280px] lg:w-[310px] xl:w-[600px] tracking-wider slider-text xl:text-[2.50rem] text-center" />


                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full z-[999] ml-1">
                <FaAngleLeft />
            </button>
            <button className="custom-next absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full z-[999] mr-1">
                <FaAngleRight />
            </button>
        </div>
    );
}
