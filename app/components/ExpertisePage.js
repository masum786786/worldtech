'use client';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';

const ExpertiseCard = ({ title, description, imageUrl, imageAlt }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="relative w-full h-64 sm:h-72">
        <Image 
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 bg-teal-800 bg-opacity-90 backdrop-blur-sm text-white">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{title}</h3>
          {/* <FaArrowRight className="text-teal-400 text-lg ml-3 mt-1" /> */}
        </div>
        <p className="text-xs font-light leading-relaxed opacity-90">
          {description}
        </p>
      </div>

      {/* <a href="#" aria-label={`Read more about ${title}`} className="absolute inset-0 z-10"></a> */}
    </div>
  );
};

export default function ExpertisePage() {
  const expertiseData = [
    {
      title: 'Artificial Intelligence',
      description: 'We leverage AI to empower businesses with predictive analytics, natural language processing, and automation, enhancing efficiency and decision-making.',
      imageUrl: '/ai.jpg',
      imageAlt: 'Robotic head representing Artificial Intelligence',
    },
    {
      title: 'IoT Integration',
      description: 'We link devices, unlocking data-driven insights, allowing businesses to leverage IoT potential for enhanced operations and superior customer experiences.',
      imageUrl: '/ai.jpg',
      imageAlt: 'Blue sparkling background representing IoT connectivity',
    },
    {
      title: 'Blockchain Solutions',
      description: 'Our expertise in blockchain ensures secure, transparent, and decentralized systems, driving trust and innovation across various industries.',
      imageUrl: '/ai.jpg',
      imageAlt: 'Cubes representing Blockchain technology',
    },
  ];

  return (
    <section className="bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
      Our Area of Expertise
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {expertiseData.map((card, index) => (
        <div
          key={index}
          className="transform transition-transform duration-500 hover:scale-110"
        >
          <ExpertiseCard {...card} />
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
