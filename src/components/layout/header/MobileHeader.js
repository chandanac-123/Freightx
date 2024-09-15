"use client";
import { header_options } from "@/enum/header_options";
import { images } from "@/utility/images";
import { Drawer ,Button} from "flowbite-react";

import { Divide as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <div className="flex xl:hidden bg-text-secondary h-full items-center justify-center w-16">
      <Hamburger toggled={isOpen} onToggle={() => setIsOpen(true)} color="white" size={20}/>
      <>
      <Drawer open={isOpen} onClose={handleClose}>
        <Drawer.Header titleIcon='asd'/>
        <Image src={images.logo_dark} width={70} height={70}/>
          
       
        <Drawer.Items>
        <div className="flex mt-12 flex-col gap-6 h-full ">
        {header_options.map((item) => (
          <Link
          onClick={handleClose}
            className="text-lg h-full group font-semibold flex items-center gap-2 hover:cursor-pointer"
            key={item.id}
            href={item.url}
          >
                        <span className="text-text-primary">{item.title}</span>

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
          </Link>
        ))}
      </div>
        </Drawer.Items>
      </Drawer>
    </>
    </div>
  );
}
