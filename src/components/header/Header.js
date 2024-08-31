import { header_options } from "@/enum/header_options";
import { getPathname } from "@/utility/getPathname";
import { images } from "@/utility/images";
import Image from "next/image";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const { pathname } = getPathname();

  console.log("pathname", pathname);

  return (
    <header className="h-24 xl:border-b border-surface-border flex items-center gap-16">
      <a href="/" className="grow xl:grow-0">
        <Image
          className="h-10 w-28 ml-5"
          alt="Logo"
          src={images.logo_dark}
          width={112}
          height={40}
          priority
        />
      </a>
      <div className="grow hidden xl:flex items-center gap-16 h-full ">
        {header_options.map((item) => (
          <a
            key={item.id}
            href={item.url}
            className="text-lg h-full group font-semibold flex items-center gap-2 hover:cursor-pointer"
          >
            <span className="w-7 h-7 flex items-center justify-center">
              <Image
                className={`w-7 h-7 group-hover:ml-0 ${
                  pathname === item.url
                    ? "visible"
                    : "invisible opacity-0 -ml-5"
                } group-hover:opacity-100 group-hover:visible transition-all duration-500`}
                alt="Hover Icon"
                src={images.hover_icon}
                width={28}
                height={28}
                priority
              />
            </span>
            <span className="text-text-primary">{item.title}</span>
          </a>
        ))}
      </div>
      <span className="text-lg h-full group cursor-pointer font-semibold whitespace-nowrap border-l border-surface-border hidden xl:flex items-center gap-2 px-10">
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
    </header>
  );
}
