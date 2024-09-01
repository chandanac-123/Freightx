"use client";

import { header_options } from "@/enum/header_options";
import { images } from "@/utility/images";
import { Divide as Hamburger } from "hamburger-react";
import Image from "next/image";
import { useState } from "react";

export default function MobileHeader() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="flex xl:hidden relative bg-surface-secondary h-full items-center justify-center w-32">
        <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
        <div
          className="w-screen z-10 p-10 bg-white pl-5 absolute overflow-hidden origin-top top-full transition-transform right-0 flex flex-col gap-5 border-b border-surface-border"
          style={{ transform: isOpen ? "scaleY(1)" : "scaleY(0)" }}
        >
          {header_options.map((item) => (
            <span
              className="text-lg h-full group font-semibold flex items-center gap-2 hover:cursor-pointer"
              key={item.id}
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
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
