'use client';
import Image from 'next/image';
import { ProductType } from '@/types/ProductType';
import { useState } from 'react';

type ProductImageProps = {
  product: ProductType;
  fill?: boolean;
};

export default function ProductImage({ product, fill }: ProductImageProps) {
  const [loading, setLoading] = useState(true);
  return fill ? (
    <Image
      src={product.src}
      fill
      alt={product.alt}
      className={`object-cover rounded-[10px] ${
        loading ? 'animate-pulse' : 'scale-100 grayscale-0'
      }`}
      onLoadingComplete={() => setLoading(false)}
    />
  ) : (
    <Image
      src={product.src}
      width={169}
      height={169}
      alt={product.alt}
      className={`object-cover rounded-[10px] ${
        loading ? 'scale-110 grayscale' : 'scale-100 grayscale-0'
      }`}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
