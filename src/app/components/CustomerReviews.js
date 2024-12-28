'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function TestimonialsSlider({ testimonials,title, dir }) {
  return (
    <section className="py-10" dir={dir}>
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-12">{title}</h2>
          {/* أزرار التنقل المخصصة */}
          <div
            className="custom-btn-next flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white absolute top-1/2 right-1 transform -translate-y-1/2 z-10 cursor-pointer hover:bg-gray-900"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
          <div
            className="custom-btn-prev flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white absolute top-1/2 left-1 transform -translate-y-1/2 z-10 cursor-pointer hover:bg-gray-900"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
          </div>

        {/* السلايدر */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: '.custom-btn-next',
            prevEl: '.custom-btn-prev',
          }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonialSwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-2xl shadow-lg testimonial-card mb-10">
                <h4 className="text-xl font-bold mb-4">{testimonial.name}</h4>
                <p className="text-gray-700">{testimonial.opinion}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
