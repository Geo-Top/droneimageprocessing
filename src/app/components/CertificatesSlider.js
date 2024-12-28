"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const CertificatesSlider = ({certificates, title, dir}) => {
  return (
    <section className="py-5 bg-gray-50 relative" dir={dir}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
           {title}
        </h2>
        <div className="max-w-4xl mx-auto relative">
          {/* أزرار التنقل المخصصة */}
          <div
            className="custom-button-next flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer hover:bg-gray-900"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
          <div
            className="custom-button-prev flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer hover:bg-gray-900"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
          </div>

          {/* السلايدر */}
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".custom-button-next",
              prevEl: ".custom-button-prev",
            }}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            className="certificateSwiper"
          >
            {certificates.map((certificate, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-3 rounded-lg shadow-md max-w-md mx-auto mb-10">
                  <Image
                    src={certificate.src}
                    alt={certificate.alt}
                    width={600}
                    height={400}
                    className="rounded-lg mx-auto"
                  />
                  <h4 className="text-xl font-semibold text-center mt-4 text-gray-700">
                    {certificate.alt}
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSlider;
