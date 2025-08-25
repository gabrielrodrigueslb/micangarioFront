import Image from 'next/image';
import { ProductProps } from '@/types/ProductProps';

export default function ProductCard({ src, alt, name, price }: ProductProps) {
  function formatPrice(price: number) {
    const formattedPrice = price.toFixed(2).toString().replace('.', ',');
    return formattedPrice;
  }

  return (
    <li className='flex flex-col'>
      <div className="max-w-[160px] inline-block">
        <img
          className="rounded-[10px] flex w-full"
          src={src}
          alt={alt}
        />
      </div>
      <div className="product-infos">
        <p>{name}</p>
        <span>R$ {formatPrice(price)}</span>
      </div>
    </li>
  );
}
