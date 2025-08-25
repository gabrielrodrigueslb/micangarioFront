import Header from '@/components/Header/Header';
import Navbar from '@/components/Navbar/Navbar';
import CategoryItem from '@/components/CategoryItem/CategoryItem';
import ProductCard from '@/components/ProductCard/ProductCard';
import { ProductProps } from '@/types/ProductProps';

export default function Home() {
  const produtos: ProductProps[] = [
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
      <main className="main-background container m-auto w-full h-full p-[20px] pb-[84px] max-w-[1440px]">
        <Header />
        <aside className="promocional-banner py-[27px] overflow-hidden">
          <img
            className="w-full"
            src={'/banner.png'}
            alt={'Banner promocional'}
          />
        </aside>
        <Navbar />

        <section className="categories pb-5">
          <div className="categories-header ">
            <h2 className="text-lg font-semibold opacity-80">Categorias</h2>
          </div>
          <div className="category-list-container ml-[-20px] mr-[-20px]">
            <ul className="flex gap-5 pt-2.5 overflow-x-auto px-5">
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
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {produtos.map((produto, index) => (
              <ProductCard
                key={index}
                src={produto.src}
                alt={produto.alt}
                name={produto.name}
                price={produto.price}
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
