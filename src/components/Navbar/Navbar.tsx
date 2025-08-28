"use client";

import { FiHome } from 'react-icons/fi';
import { AiOutlineProduct } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { LuUserRound } from 'react-icons/lu';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './Navbar.scss';

type LinkProps = {
  href: string;
  label: string;
  icon: React.ReactNode; // ✅ Corrigido
};

export default function Navbar() {
  const pathname = usePathname();

  const links: LinkProps[] = [
    { href: '/', label: 'Início', icon: <FiHome /> },
    { href: '/search', label: 'Descobrir', icon: <AiOutlineProduct /> },
    { href: '/favorites', label: 'Favoritos', icon: <FaRegHeart /> },
    { href: '/profile', label: 'Perfil', icon: <LuUserRound /> },
  ];

  return (
    <nav className="navbar w-full fixed bottom-0 max-w-screen left-0 right-0 px-9 py-2 z-50 bg-(--background) select-none ">
      <ul className="flex justify-between gap-1 max-w-[500px] m-auto">
        {links.map(({ href, label, icon }) => {
          const active = pathname === href; // ✅ agora existe
          return (
            <li key={href}>
              <Link href={href}>
                <span
                  className={`flex flex-col justify-center items-center text-[20px] px-[14px] py-[4px] cursor-pointer transition-all
                    ${active ? "text-(--primary-color) opacity-100" : "opacity-50 text-gray-600"}`}
                >
                  {icon}
                  <p className="text-[12px] font-semibold">{label}</p>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
