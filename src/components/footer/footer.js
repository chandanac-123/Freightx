import { external_links } from "@/enum/external_links";
import { images } from "@/utility/images";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-text-primary px-4 py-6">
      <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6">

        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            alt="Logo"
            src={images.logo}
            width={180}
            priority
            className="w-[140px] sm:w-[180px] h-auto"
          />

          <h3 className="text-surface-border text-[10px] sm:text-xs tracking-wider font-inter mt-1">
            Neutral Logistic Solutions
          </h3>
        </div>

        {/* Social + Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex gap-4">
            {external_links.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Image
                  alt={item.title}
                  src={item.src}
                  width={18}
                  height={18}
                  className="h-4 w-4 sm:h-5 sm:w-5 group-hover:-translate-y-[2px] transition-transform duration-300"
                />
              </a>
            ))}
          </div>

          <h3 className="text-surface-border text-center md:text-right text-xs sm:text-sm tracking-wider font-inter">
            All Rights Reserved © 2024 Qode Interactive
          </h3>
        </div>
      </div>
    </footer>
  );
}