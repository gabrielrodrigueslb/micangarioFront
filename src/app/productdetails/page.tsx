import ReturnButton from '@/components/UI/ReturnButton';
import { MdShare } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa6';
import ProductImage from '@/components/ProductImage';
import Image from 'next/image';

export default function ProductDetails() {
  return (
    <main className="main-background container m-auto w-full h-full pb-[5.25rem] max-w-[1440px]">
      <header className="flex items-center justify-between gap-2.5 mb-6 w-full max-w-[1440px] px-5 fixed justify-self-center z-40 left-0 right-0 top-5">
        <ReturnButton />
        <div className="flex gap-3">
          <button className="cart-button inline-block p-[12px] text-2xl border-[2.8] rounded-[50px] border-(--border-color) text-(--text-color) cursor-pointer bg-(--color-background)">
            <FaRegHeart className="opacity-70" />
          </button>
          <button className="cart-button inline-block p-[12px] text-2xl border-[2.8] rounded-[50px] border-(--border-color) text-(--text-color) cursor-pointer bg-(--color-background)">
            <MdShare className="opacity-70" />
          </button>
        </div>
      </header>
        <Image
          src="/product.png"
          width={180}
          height={180}
          quality={100}
          alt="produto"
          className={`object-cover w-full max-w-[400px] max-h-[400px]`}
        />
        <section className='p-5'>
          
        </section>
    </main>
  );
}
