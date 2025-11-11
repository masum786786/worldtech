"use client";
import Image from "next/image";
import React from "react";

export default function VisionPage() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
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

        {/* --- Right Side: Text Content --- */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-bold text-teal-700">
            Your Vision, Our Virtuosity
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At <span className="font-semibold text-teal-600">worldTech</span>, we transform your ideas into reality. 
            Our commitment to innovation, expertise in cutting-edge technologies, 
            and dedication to precision ensure that your projects thrive. 
            Discover the synergy of your vision and our virtuosity, 
            creating a future where possibilities know no bounds.
          </p>
        </div>
      </div>
    </section>
  );
}
