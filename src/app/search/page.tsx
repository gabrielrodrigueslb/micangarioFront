import Link from 'next/link';
import { IoIosSearch } from 'react-icons/io';
import { IoIosArrowBack } from "react-icons/io";

export default function SearchScreen() {
  return (
    <div>
        <Link href={'../'} className="cart-button inline-block p-[12px] text-2xl border-[2.8] rounded-[50px] border-(--border-color) text-(--text-color) cursor-pointer">
          <IoIosArrowBack className="opacity-70" />
        </Link>
      <span className="seachbar bg-(--input-color) w-full p-[15px] flex items-center rounded-[10px] mt-4 gap-3">
        <input
          type="text"
          placeholder="Pesquisar"
          className="w-full outline-0 opacity-70"
        />
        <button className="bg-none px-1.5 text-[28px] cursor-pointer opacity-70">
          <IoIosSearch />
        </button>
      </span>
      
    </div>
  );
}
