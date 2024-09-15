import { images } from "@/utility/images";
import Image from "next/image";

const ServiceCard = () => {
  return (
    <div className="w-full border-t border-r border-gray-400   h-80 tablet:h-96 flex items-end p-6 tablet:p-10 relative">
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
     
    </>
  );
};

export default Service;
