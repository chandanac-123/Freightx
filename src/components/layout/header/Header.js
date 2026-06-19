"use client";
import { header_options } from "@/enum/header_options";
import { images } from "@/utility/images";
import Image from "next/image";
import MobileHeader from "./MobileHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="h-24 bg-text-primary border-gray-300 flex  gap-16">
      <div className="container flex items-center  justify-between">

        <div className="flex flex-col">
          <Image
            alt="Logo"
            src={images.logo}
            width={250}
            priority
          />
          <span className="text-surface-border text-center text-sm">Neutral Logistic Solutions</span>
        </div>


        <div className="grow hidden xl:flex gap-4 h-full justify-end">
          {header_options.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className={`text-lg h-full group font-semibold flex items-center gap-2 transition-all duration-300 ${pathname === item.url
                  ? "text-white"
                  : "text-surface-border"
                }`}
            >
              <span className="w-7 h-7 flex items-end justify-end">
                <Image
                  className={`w-7 h-7 transition-all duration-500 ${pathname === item.url
                      ? "ml-0 opacity-100 visible"
                      : "-ml-5 opacity-0 invisible group-hover:ml-0 group-hover:opacity-100 group-hover:visible"
                    }`}
                  alt="Hover Icon"
                  src={images.hover_icon}
                  width={28}
                  height={28}
                  priority
                />
              </span>
              <span
                className={`${pathname === item.url
                    ? "text-white"
                    : "text-surface-border"
                  }`}
              >
                {item.title}
              </span>
            </Link>
          ))}
        </div>
        <MobileHeader />
      </div>
    </header>
  );
}
