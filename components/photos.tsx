"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { photosData } from '@/lib/data';
import Image from 'next/image';
import { useSectionInView } from '@/lib/hooks';

export default function Photos() {
  const { ref } = useSectionInView("Photos", 0.5);

  return (
    <section ref={ref} id="photos" className="scroll-mt-28 mb-28">
      <SectionHeading>Photos</SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photosData.map((photo, index) => (
          <div key={index} className="relative w-full h-64">
            <Image
              src={photo.src}
              alt={photo.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
