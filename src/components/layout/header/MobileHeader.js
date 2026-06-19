"use client";

import { header_options } from "@/enum/header_options";
import { Divide as Hamburger } from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function MobileHeader() {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative flex xl:hidden h-full items-center">
      <div className="flex h-12 w-12 items-center justify-center bg-surface-secondary">
        <Hamburger
          color="white"
          size={22}
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>

      <div
        className={`absolute top-full right-0 w-72 bg-white rounded-b-xl shadow-2xl overflow-hidden transition-all duration-300 ease-in-out z-50 ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-2 invisible"
        }`}
      >
        <nav className="py-2">
          {header_options.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              onClick={() => setOpen(false)}
              className={`flex items-center px-6 py-4 text-base font-medium transition-colors duration-200
                ${
                  pathname === item.url
                    ? "bg-surface-secondary text-white"
                    : "text-text-primary hover:bg-gray-100"
                }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}