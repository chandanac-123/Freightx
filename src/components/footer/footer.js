import { external_links } from "@/enum/external_links";
import { footer_content } from "@/enum/footer_content";
import { images } from "@/utility/images";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-surface-primary grid grid-cols-1 md:grid-cols-2 md:gap-x-20 lg:gap-x-0 xl:grid-cols-4 py-[60px] px-[40px] sm:py-[80px] sm:px-[60px] lg:py-0 lg:px-0">
      <div className="flex flex-col justify-between gap-2 pb-[20px] pt-[40px] lg:px-[50px] lg:py-[140px] xl:border-r xl:border-footer-border">
        <div className="flex flex-col gap-4">
          <Image
            alt="Logo"
            src={images.logo_light}
            height={64}
            width={176}
            className="h-16 w-44"
            priority
          />
          <h3 className="text-text-tertiary tracking-wider font-sora">
            Lorem ipsum dolor, sit amet consectetur elit.
          </h3>
        </div>
        <div className="flex flex-col gap-5 mt-10">
          <div className="flex gap-5">
            {external_links.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                className="group"
              >
                <Image
                  alt={item.title}
                  src={item.src}
                  height={16}
                  width={16}
                  className="h-4 w-4 group-hover:-translate-y-[2px] transition-transform duration-300"
                  priority
                />
              </a>
            ))}
          </div>
          <h3 className="text-text-tertiary tracking-wider text-sm font-sora">
            All Rights Reserved © 2024 Qode Interactive
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-2 pb-[20px] pt-[40px] lg:px-[50px] lg:py-[140px] xl:border-r xl:border-footer-border">
        <h1 className="text-white font-semibold text-xl tracking-wide flex items-center gap-2 whitespace-nowrap font-inter">
          <Image
            alt="Hover Icon"
            src={images.hover_icon}
            className="h-5 w-5"
            width={20}
            height={20}
          />
          {footer_content.content_1.title}
        </h1>
        <div className="mt-4 flex flex-col gap-4 ml-2 font-sora">
          {footer_content.content_1.sub_titles.map((item) => (
            <span key={item.id}>
              <a
                href={item.link}
                className="text-text-tertiary tracking-wider hover:text-white transition-colors duration-300"
              >
                {item.title}
              </a>
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 pb-[20px] pt-[40px] lg:px-[50px] lg:py-[140px] xl:border-r xl:border-footer-border">
        <h1 className="text-white font-semibold text-xl tracking-wide flex items-center gap-2 whitespace-nowrap font-inter">
          <Image
            alt="Hover Icon"
            src={images.hover_icon}
            className="h-5 w-5"
            width={20}
            height={20}
          />
          {footer_content.content_2.title}
        </h1>
        <div className="mt-4 flex flex-col gap-4 ml-2 font-sora">
          {footer_content.content_2.sub_titles.map((item) => (
            <span key={item.id}>
              <a
                href={item.link}
                className="text-text-tertiary tracking-wider hover:text-white transition-colors duration-300"
              >
                {item.title}
              </a>
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 pb-[20px] pt-[40px] lg:px-[50px] lg:py-[140px]">
        <h1 className="text-white font-semibold text-xl tracking-wide flex items-center gap-2 whitespace-nowrap font-inter">
          <Image
            alt="Hover Icon"
            src={images.hover_icon}
            className="h-5 w-5"
            width={20}
            height={20}
          />
          {footer_content.content_3.title}
        </h1>
        <div className="mt-4 flex flex-col gap-4 ml-2 font-sora">
          {footer_content.content_3.sub_titles.map((item) => (
            <span key={item.id}>
              <a
                href={item.link}
                className="text-text-tertiary tracking-wider hover:text-white transition-colors duration-300"
              >
                {item.title}
              </a>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
