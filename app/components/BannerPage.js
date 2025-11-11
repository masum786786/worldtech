import Image from 'next/image';
import React from 'react';

export default function BannerPage() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-gray-900">
      <Image 
        src="/banner.jpg" // Replace with your actual image
        alt="Digital circuit board background with a glowing blue globe"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-gray-900 opacity-20"></div>
    </section>
  );
}
