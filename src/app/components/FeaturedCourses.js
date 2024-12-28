"use client";
import Image from "next/image"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";

export default function FeaturedCourses({ courses, dir = "ltr", titleSection }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-10" dir={dir}>
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold mb-12 text-center">{titleSection}</h2>

        <div className="">
          {/* Custom Navigation Buttons */}
          <button
            ref={prevRef}
            className="absolute left-0 top-1/2 z-10 transform -translate-y-1/2 bg-black text-white w-10 h-10 rounded-full shadow-lg transition"
          >
            ‹
          </button>
          <button
            ref={nextRef}
            className="absolute right-0 top-1/2 z-10 transform -translate-y-1/2 bg-black text-white w-10 h-10 rounded-full shadow-lg  transition"
          >
            ›
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {courses.map((course, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 mb-10">
                  <div className="h-48 bg-blue-600 flex items-center justify-center">
                    <Image
                      src={course.image} 
                      alt={course.title}
                      width={195}
                      height={195}
                      style={{ width: "100%", height: "100%" , objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{course.duration}</span>
                      <a
                        href="https://wa.me/201040950801"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                      >
                        {course.cta}
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
