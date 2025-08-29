'use client';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.scss';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { ProductType } from '@/types/ProductType';

interface SwiperImagesProps {
  product: ProductType;
}

export default function SwiperImages({ product }: SwiperImagesProps) {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {product.photos?.map((photo: string, index: number) => (
        <SwiperSlide key={index}>
          <Image
            src={photo}
            width={180}
            height={180}
            quality={100}
            alt="produto"
            className="object-cover w-full max-w-[400px] max-h-[380px]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}