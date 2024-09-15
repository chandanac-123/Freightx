import { header_options } from "@/enum/header_options";
import { images } from "@/utility/images";
import Image from "next/image";
import MobileHeader from "./MobileHeader";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-24 border-b  border-gray-300 flex items-center gap-16">
      <div className="container flex items-center ">

      
      <a href="#" className="grow">
        <Image
          className="h-10 w-28 "
          alt="Logo"
          src={images.logo_dark}
          width={112}
          height={40}
          priority
        />
      </a>
      <div className="grow hidden xl:flex items-center gap-16 h-full ">
        {header_options.map((item) => (
          <Link
            className="text-lg h-full group font-semibold flex items-center gap-2 hover:cursor-pointer"
            key={item.id}
            href={item.url}
          >
            <span className="w-7 h-7 flex items-center justify-center">
              <Image
                className="w-7 h-7 -ml-5 group-hover:ml-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500"
                alt="Hover Icon"
                src={images.hover_icon}
                width={28}
                height={28}
                priority
              />
            </span>
            <span className="text-text-primary">{item.title}</span>
          </Link>
        ))}
      </div>
      <span className="text-lg h-full group cursor-pointer font-semibold whitespace-nowrap border-l-2 border-gray-300 hidden xl:flex items-center gap-2 px-10">
        <Image
          className="h-4 w-4 group-hover:rotate-90 duration-500"
          alt="Add Icon"
          src={images.add_icon}
          width={16}
          height={16}
          priority
        />
        <span className="text-text-primary">Track Your Order</span>
      </span>
      <MobileHeader />
      </div>
    </header>
  );
}
