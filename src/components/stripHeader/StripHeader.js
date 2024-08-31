import { user_details } from "@/enum/user_details";
import { images } from "@/utility/images";
import Image from "next/image";

export default function StripHeader() {
  return (
    <div className="hidden bg-surface-primary xl:flex items-center gap-20 px-5 h-9">
      <a
        href={`tel:${user_details.phone_number}`}
        target="_blank"
        className="flex items-center gap-2 group"
      >
        <Image
          className="h-8 w-4"
          alt="Phone Icon"
          src={images.phone_icon}
          width={16}
          height={32}
          priority
        />
        <span className="text-xs tracking-wide text-white opacity-70 group-hover:opacity-100 duration-500 transition-opacity">
          {user_details.phone_number}
        </span>
      </a>
      <a
        href={`mailto:${user_details.email}`}
        target="_blank"
        className="flex items-center gap-2 group"
      >
        <Image
          className="h-8 w-4"
          alt="Email Icon"
          src={images.email_icon}
          width={16}
          height={32}
          priority
        />
        <span className="text-xs tracking-wide text-white opacity-70 group-hover:opacity-100 duration-500 transition-opacity">
          {user_details.email}
        </span>
      </a>
      <a
        href={`http://maps.google.com/?q=1200 ${user_details.address}`}
        target="_blank"
        className="flex ml-auto items-center gap-2 group"
      >
        <Image
          className="h-8 w-4"
          alt="Location Icon"
          src={images.location_logo}
          width={16}
          height={32}
          priority
        />
        <span className="text-xs tracking-wide text-white opacity-70 group-hover:opacity-100 duration-500 transition-opacity">
          {user_details.address}
        </span>
      </a>
    </div>
  );
}
