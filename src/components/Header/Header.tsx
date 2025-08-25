import Image from 'next/image';
import { IoBagOutline } from 'react-icons/io5';
import { IoIosSearch } from 'react-icons/io';

import Link from 'next/link';
export default function Header() {
  return (
    <header className="flex justify-between items-center gap-[20px]">
      <div className="logo-container">
        <Image
          src={'/logo.png'}
          alt="Logo miçagário"
          width={54}
          height={54}
          className="logo rounded-[50%]"
        />
      </div>
      <nav className="flex items-center gap-[12px]">
        <span className="cart-button inline-block p-[12px] text-2xl border-[2.8] rounded-[50px] border-(--border-color) text-(--text-color) cursor-pointer hover:bg-(--button-color) hover:text-(--text-hover-color) hover:opacity-100 opacity-70 transition delay-[5]">
          <IoBagOutline />
        </span>

        <Link
          href={'/search'}
          className="cart-button inline-block p-[12px] text-2xl border-[2.8] rounded-[50px] border-(--border-color) text-(--text-color) cursor-pointer hover:bg-(--button-color) hover:text-(--text-hover-color) hover:opacity-100 opacity-70 transition delay-[5]"
        >
          <IoIosSearch />
        </Link>
      </nav>
    </header>
  );
}
