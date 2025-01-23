import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

export default function Slider() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="relative w-full h-[600px]">
            <div className="absolute inset-0 building-bg bg-[#001f3f]">
              <div className=" text-white text-4xl font-bold z-10 px-4 md:px-32 flex flex-col h-full justify-center">
                <div className="relative">
                  <Image
                    src={"/logo.png"}
                    width={1200}
                    height={1200}
                    alt={"logo"}
                    className="w-[550px] md:w-[450px] relative md:-right-[25px] bottom-[8rem] md:bottom-[0.5rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
