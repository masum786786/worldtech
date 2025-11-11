"use client";
import Image from "next/image";
import React from "react";

export default function VisionPage2() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        

        {/* --- Right Side: Text Content --- */}
        <div className="flex flex-col justify-center space-y-6"> 
          <h2 className="text-4xl font-bold text-teal-700">
            Your Vision, Our Virtuosity
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At <span className="font-semibold text-teal-600">worldTech</span>, We transform your ideas into reality through a commitment to innovation, expertise in cutting-edge technologies, and a dedication to precision that ensures every project thrives. By blending your vision with our virtuosity, we create a future where possibilities know no bounds. From concept to completion, we craft experiences that inspire and endure, turning challenges into opportunities with creativity and strategic insight. Our team is driven to redefine excellence, push boundaries, and shape digital solutions that are smarter, stronger, and more connected. When imagination meets innovation, the extraordinary truly happens — and together, we make it real.
          </p>
        </div>

        {/* --- Left Side: Image --- */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/ai.jpg" // replace with your actual image path
            alt="Creative concept representing innovation and vision"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl transition-transform duration-700 hover:scale-105"
            priority
          />
        </div>

      </div>
    </section>
  );
}
