import { FiHome } from 'react-icons/fi';
import { AiOutlineProduct } from "react-icons/ai";
import { FaRegHeart } from 'react-icons/fa';
import { LuUserRound } from 'react-icons/lu';
import "./Navbar.scss"

export default function Navbar() {
  return (
    <nav className="navbar w-full fixed bottom-0 max-w-screen left-0 right-0 px-9 py-4 z-50 bg-(--background)">
      <ul className="flex justify-between gap-1 max-w-[500px] m-auto">
        <li className="flex items-center cursor-pointer opacity-50 px-[14px] py-[4px] ">
          <span className="flex flex-col justify-center items-center text-[20px]  ">
            <FiHome />
            <p className="text-[12px] font-semibold">Início</p>
          </span>
        </li>
        <li className="cursor-pointer opacity-50 px-[14px]  flex">
          <span className="flex flex-col justify-center items-center text-[20px] ">
            <AiOutlineProduct />
            <p className="text-[12px] font-semibold ">Descobrir</p>
          </span>
        </li>
        <li className="cursor-pointer opacity-50 px-[14px]  flex">
          <span className="flex flex-col justify-center items-center text-[20px] ">
            <FaRegHeart />
            <p className="text-[12px] font-semibold">Favoritos</p>
          </span>
        </li>
        <li className="cursor-pointer opacity-50 px-[14px]  flex">
          <span className="flex flex-col justify-center items-center text-[20px]">
            <LuUserRound />
            <p className="text-[12px] font-semibold">Perfil</p>
          </span>
        </li>
      </ul>
    </nav>
  );
}
