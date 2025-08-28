import Header from '@/components/Header/Header';
import ProductCard from '@/components/ProductCard/ProductCard';
import { ProductType } from '@/types/ProductType';
import Navbar from '@/components/Navbar/Navbar';
import Categories from '@/components/Categories/Categories';

export default function Home() {
  const produtos: ProductType[] = [
    {
      src: '/product6.png',
      alt: 'Produto 6',
      name: 'Pulseiras',
      price: 100.0,
    },
    {
      src: '/product7.png',
      alt: 'Produto 7',
      name: 'Braceletes',
      price: 100.0,
    },
    {
      src: '/product8.png',
      alt: 'Produto 8',
      name: 'Pulseiras',
      price: 100.0,
    },
    {
      src: '/product9.png',
      alt: 'Produto 9',
      name: 'Pulseiras',
      price: 100.0,
    },
    {
      src: '/product6.png',
      alt: 'Produto 6',
      name: 'Pulseiras',
      price: 100.0,
    },
    {
      src: '/product7.png',
      alt: 'Produto 7',
      name: 'Braceletes',
      price: 100.0,
    },
    {
      src: '/product8.png',
      alt: 'Produto 8',
      name: 'Pulseiras',
      price: 100.0,
    },
    {
      src: '/product9.png',
      alt: 'Produto 9',
      name: 'Pulseiras',
      price: 100.0,
    },
  ];
  return (
    <>
      <main className="main-background container m-auto w-full h-full pb-[5.25rem] max-w-[1440px] p-5">
        <Header />
        <aside className="promocional-banner pt-[1.5rem] pb-5 overflow-hidden max-h-1/5 flex ">
          <img
            className="w-full rounded-[1.25rem] object-cover object-center"
            src={'/banner_new.png'}
            alt={'Banner promocional'}
          />
        </aside>
        <Navbar />

        <Categories />

        <section className="Products m-auto">
          <div className="grid grid-cols-2 min-[28.125rem]:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
            {produtos.map((produto, index) => (
              <ProductCard key={index} product={produto} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
