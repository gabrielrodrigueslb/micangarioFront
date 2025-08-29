'use client';

import { useRouter } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';

export default function ReturnButton() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };
  return (
    <button
      onClick={handleBack}
      className="cart-button inline-block p-[8px] text-2xl border-[2.8] rounded-[50px] border-(--border-color) text-(--text-color) cursor-pointer bg-(--color-background)"
    >
      <IoIosArrowBack className="opacity-70" />
    </button>
  );
}
