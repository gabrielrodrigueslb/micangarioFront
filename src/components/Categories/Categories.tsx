import CategoryItem from '../CategoryItem/CategoryItem'

export default function Categories() {
  return (
        <section className="categories pb-6">
          <div className="categories-header ">
            <h2 className="title">Categorias</h2>
          </div>
          <div className="category-list-container ml-[-1.25rem] mr-[-1.25rem]">
            <ul
              className="flex gap-5 pt-2.5 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden 
            [-ms-overflow-style:'none'] 
            [scrollbar-width:'none']"
            >
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
  )
}
