

import Categories from '@/components/Categories/Categories';
import ReturnButton from '@/components/UI/ReturnButton';
import { IoIosSearch} from 'react-icons/io';

export default function SearchScreen() {


  return (
    <main className="main-background container m-auto w-full h-full pb-[5.25rem] max-w-[1440px] p-5">
      <header className="flex items-center justify-center gap-2.5 mb-6">
       <ReturnButton/>

        <span className="seachbar bg-(--input-color) w-full p-[15px] flex items-center rounded-[10px]  gap-3">
          <input
            type="text"
            placeholder="Pesquisar"
            className="w-full outline-0 opacity-70"
          />
          <button className="bg-none px-1.5 text-[28px] cursor-pointer opacity-70">
            <IoIosSearch />
          </button>
        </span>
      </header>

      <Categories />
    </main>
  );
}
