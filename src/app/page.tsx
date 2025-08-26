import Header from '@/components/Header/Header';
import Navbar from '@/components/Navbar/Navbar';
import CategoryItem from '@/components/CategoryItem/CategoryItem';
import ProductCard from '@/components/ProductCard/ProductCard';
import { ProductType } from '@/types/ProductType';

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
        <aside className="promocional-banner pt-[1.5rem] pb-5 overflow-hidden">
          <img
            className="w-full"
            src={'/banner.png'}
            alt={'Banner promocional'}
          />
        </aside>
        <Navbar />

        <section className="categories pb-6">
          <div className="categories-header ">
            <h2 className="text-lg font-semibold opacity-80">Categorias</h2>
          </div>
          <div className="category-list-container ml-[-1.25rem] mr-[-1.25rem]">
            <ul className="flex gap-5 pt-2.5 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden 
            [-ms-overflow-style:'none'] 
            [scrollbar-width:'none']">
              <CategoryItem
                src="/product1.png"
                alt="Produto 1"
                name="Pulseiras"
              />
              <CategoryItem
                src="/product2.png"
                alt="Produto 2"
                name="Braceletes"
              />
              <CategoryItem
                src="/product3.png"
                alt="Produto 3"
                name="Colares"
              />
              <CategoryItem src="/product4.png" alt="Produto 4" name="Anéis" />
              <CategoryItem
                src="/product5.png"
                alt="Produto 5"
                name="Pulseiras"
              />
            </ul>
          </div>
        </section>

        <section className="Products m-auto">
          <div className="grid grid-cols-2 min-[28.125rem]:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
            {produtos.map((produto, index) => (
              <ProductCard
              key={index}
                product={produto}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
