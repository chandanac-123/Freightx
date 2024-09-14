import { images } from "@/utility/images";
import Image from "next/image";
import { GiCargoCrane } from "react-icons/gi";

const ServiceCard = () => {
  return (
    <div className="w-full [&:nth-child(3)]:border-b [&:nth-child(2)]:border-b tablet:[&:nth-child(3)]:border-b-0 [&:nth-child(1)]:border-b laptop:[&:nth-child(1)]:border-b-0 laptop:[&:nth-child(2)]:border-b-0 laptop:border-b-0 border-r border-gray-400  bg-[#efefef] h-80 tablet:h-96 flex items-end p-6 tablet:p-10 relative">
      <Image
        className=" object-cover absolute top-14 right-14"
        src={images.ocean}
        alt="ocean"
      />

      <div>
        <h3 className="text-3xl font-semibold mb-3 text-dark">Air Freight</h3>
        <p className="text-sm text-dark">
          Vix ut ignota deserunt partien pros tale falli vpericulis ad, que
          deseru.
        </p>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <>
      <div className="w-full  grid tablet:grid-cols-2 laptop:grid-cols-4">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <div className="bg-text-primary w-full p-6 relative overflow-hidden">
        <div className="flex items-center gap-16 whitespace-nowrap animate-move">
          <div className="flex items-center gap-5 text-white">
            <GiCargoCrane className="text-4xl" />
            <h2 className="text-4xl font-semibold">Transport & Logistics</h2>
          </div>
          <div className="flex items-center gap-5 text-white">
            <GiCargoCrane className="text-4xl" />
            <h2 className="text-4xl font-semibold">Transport & Logistics</h2>
          </div>
          <div className="flex items-center gap-5 text-white">
            <GiCargoCrane className="text-4xl" />
            <h2 className="text-4xl font-semibold">Transport & Logistics</h2>
          </div>
          <div className="flex items-center gap-5 text-white">
            <GiCargoCrane className="text-4xl" />
            <h2 className="text-4xl font-semibold">Transport & Logistics</h2>
          </div>
          <div className="flex items-center gap-5 text-white">
            <GiCargoCrane className="text-4xl" />
            <h2 className="text-4xl font-semibold">Transport & Logistics</h2>
          </div>
          <div className="flex items-center gap-5 text-white">
            <GiCargoCrane className="text-4xl" />
            <h2 className="text-4xl font-semibold">Transport & Logistics</h2>
          </div>
          <div className="flex items-center gap-5 text-white">
            <GiCargoCrane className="text-4xl" />
            <h2 className="text-4xl font-semibold">Transport & Logistics</h2>
          </div>
          <div className="flex items-center gap-5 text-white">
            <GiCargoCrane className="text-4xl" />
            <h2 className="text-4xl font-semibold">Transport & Logistics</h2>
          </div>
          <div className="flex items-center gap-5 text-white">
            <GiCargoCrane className="text-4xl" />
            <h2 className="text-4xl font-semibold">Transport & Logistics</h2>
          </div>{" "}
          <div className="flex items-center gap-5 text-white">
            <GiCargoCrane className="text-4xl" />
            <h2 className="text-4xl font-semibold">Transport & Logistics</h2>
          </div>
          <div className="flex items-center gap-5 text-white">
            <GiCargoCrane className="text-4xl" />
            <h2 className="text-4xl font-semibold">Transport & Logistics</h2>
          </div>{" "}
          <div className="flex items-center gap-5 text-white">
            <GiCargoCrane className="text-4xl" />
            <h2 className="text-4xl font-semibold">Transport & Logistics</h2>
          </div>
          <div className="flex items-center gap-5 text-white">
            <GiCargoCrane className="text-4xl" />
            <h2 className="text-4xl font-semibold">Transport & Logistics</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
