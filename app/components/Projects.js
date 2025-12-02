'use client';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectCard = ({ title, description, imageUrl, imageAlt }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="relative w-full h-64 sm:h-72">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5  bg-opacity-90 backdrop-blur-sm text-white">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-xs font-light leading-relaxed opacity-90">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function Projects() {
  const expertiseData = [
    {
      title: 'Saimora',
      description: 'A React Native mobile application developed for a Saudi-based client.',
      imageUrl: '/app2.jpg',
      imageAlt: 'Robotic head representing Artificial Intelligence',
    },
    {
      title: 'Dentle Life Line',
      description: 'A static website built to assist dental users with essential services.',
      imageUrl: '/app3.jpg',
      imageAlt: 'Blue sparkling background representing IoT connectivity',
    },
    {
      title: 'Hajj Umrah',
      description: 'A full system for managing and booking Hajj & Umrah packages.',
      imageUrl: '/app3.jpg',
      imageAlt: 'Cubes representing Blockchain technology',
    },
    {
      title: 'Inventix',
      description: 'A Finland-based clean and modern website development.',
      imageUrl: '/ai.jpg',
      imageAlt: 'Blue sparkling background representing IoT connectivity',
    },
    {
      title: 'GHTS',
      description: 'A Next.js + Strapi website with API integration.',
      imageUrl: '/ai.jpg',
      imageAlt: 'Blue sparkling background representing IoT connectivity',
    },
    {
      title: 'StreamBuzz',
      description: 'Cloud-powered video streaming platform.',
      imageUrl: '/ai.jpg',
      imageAlt: 'Blue sparkling background representing IoT connectivity',
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Project Deliverd Successfully 
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {expertiseData.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="transform transition-transform duration-500 hover:scale-105">
                <ProjectCard {...card} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
