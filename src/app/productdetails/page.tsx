'use client'
import ReturnButton from '@/components/UI/ReturnButton';
import { MdShare } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa6';

import './productdetails.scss';
import { ProductType } from '@/types/ProductType';
import { IoBagOutline } from 'react-icons/io5';
import SwiperImages from '@/components/Swiper/Swiper';
import { useState } from 'react';
import Example from '@/components/OrderModal/OrderModal';


export default function ProductDetails() {
  const produto: ProductType = {
  photos: ['/product.png', '/productview.jpeg', '/productview2.jpeg'],
  src: '/product.png',
  alt: 'Produto',
  name: 'Bracelete de sol',
  price: 100.0,
};
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="main-background container m-auto w-full h-full pb-[5.25rem] max-w-[1140px]">
      <header className="flex items-center justify-between gap-2.5 mb-6 w-full max-w-[1440px] px-5 fixed justify-self-center z-40 left-0 right-0 top-5">
        <ReturnButton />
        <div className="flex gap-3">
          <button className="cart-button inline-block p-[8px] text-2xl border-[2.8] rounded-[50px] border-(--border-color) text-(--text-color) cursor-pointer bg-(--color-background)">
            <FaRegHeart className="opacity-70" />
          </button>
          <button className="cart-button inline-block p-[8px] text-2xl border-[2.8] rounded-[50px] border-(--border-color) text-(--text-color) cursor-pointer bg-(--color-background)">
            <MdShare className="opacity-70" />
          </button>
        </div>
      </header>
      {/* <Image
        src="/product.png"
        width={180}
        height={180}
        quality={100}
        alt="produto"
        className={`object-cover w-full max-w-[400px] max-h-[380px]`}
      /> */}
      <SwiperImages product={produto}/>
      <section className="p-5 detail-section">
        <span className="flex justify-between items-center">
          <h1 className="title">Bracelete de sol</h1>
          <p className="price font-extrabold text-xl">R$40,00</p>
        </span>

        <ul className="flex gap-2.5 items-center py-4">
          <li className="h-[45px] w-[45px] bg-green-300 flex items-center justify-center rounded-full max-w-[50px]  max-h-[50px] cursor-pointer selected ">
            Cor
          </li>
          <li className="h-[45px] w-[45px] bg-amber-500 flex items-center justify-center rounded-full v max-w-[50px] cursor-pointer">
            cor
          </li>
          <li className="h-[45px] w-[45px] bg-yellow-200 flex items-center justify-center rounded-full max-w-[50px]  max-h-[50px] cursor-pointer">
            cor
          </li>
        </ul>

        <div className="border-b-2 pb-6.5 border-b-[#F2F2F2]">
          <h2 className="font-medium text-base">Detalhes do produto</h2>
          <p className="opacity-60 font-medium text-sm pt-2.5">
            O bracelete de metal prateado tem um design único e sinuoso, que se
            enrola elegantemente em volta do braço. Em uma das extremidades, um
            pingente em forma de sol, com raios detalhados e um centro circular,
            se destaca, dando um toque místico e ornamental à peça.
          </p>
        </div>
        <div className="pt-6">
          <h2 className="font-medium text-base">Prazo de produção</h2>
          <p className="opacity-60 font-medium text-sm pt-2.5">
            Produção em até <span className="font-extrabold">7 dias úteis</span>
          </p>
        </div>
        <Example open={isModalOpen} setOpen={setIsModalOpen}/>
        
        <div className="pt-6">
          <h2 className="font-medium text-base">Forma de entrega</h2>
          <p className="opacity-60 font-medium text-sm pt-2.5">
            Entrega a combinar com a vendedora
          </p>
        </div>
      </section>

      

      <aside className="shopping-buttons fixed bottom-0 left-0 right-0 bg-(--border-color) m-5 flex rounded-full max-w-[1140px]">
        <button className="flex-1 text-xs font-bold py-5 flex bg-(--color-background) justify-center items-center gap-1.5 m-1.5 mr-1 rounded-full cursor-pointer">
          <IoBagOutline className="text-sm" />
          Comprar agora
        </button>
        <button className="flex-1 text-xs font-bold py-5 flex bg-(--text-color) justify-center items-center gap-1.5 m-1.5 rounded-full ml-1 text-(--color-background) cursor-pointer"  onClick={() => setIsModalOpen(true)}>
          Adicionar ao carrinho
        </button>
      </aside>
    </main>
  );
}
