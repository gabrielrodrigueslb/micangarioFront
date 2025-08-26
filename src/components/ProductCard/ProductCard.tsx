import { ProductType } from '@/types/ProductType';
import ProductImage from '../ProductImage';

type ProductProps = {
  product: ProductType;
};

export default function ProductCard({ product }: ProductProps) {
  function formatPrice(price: number) {
    const formattedPrice = price.toFixed(2).toString().replace('.', ',');
    return formattedPrice;
  }

  return (
    <div className="flex flex-col cursor-pointer">
      {/* <img className="rounded-[10px] relative max-w-[169px] max-h-[169px] flex-1" src={product.src} alt={product.alt} /> */}
      <ProductImage product={product} />
      <div className="product-infos pt-2 font-semibold">
        <p className='opacity-70 text-sm '>{product.name}</p>
        <span className='text-base pt-1.5 font-bold'>R$ {formatPrice(product.price)}</span>
      </div>
    </div>
  );
}
