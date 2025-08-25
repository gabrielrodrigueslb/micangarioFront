import Image from "next/image";
import { CategoryProps } from "@/types/CategoryProp";


export default function CategoryItem({src, alt, name}: CategoryProps ) {
  return (
    <li className="flex flex-col items-center justify-center gap-1.5">
              <Image
                className="rounded-full max-h-[62px] max-w-[62px] overflow-hidden object-contain"
                src={src}
                alt={alt}
                quality={100}
                width={62}
                height={62}
              />
              <p className="text-xs font-semibold opacity-70">{name}</p>
            </li>
  )
}
