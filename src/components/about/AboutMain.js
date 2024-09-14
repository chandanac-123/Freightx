import { images } from "@/utility/images";

export default function AboutMain() {
  return (
    <div className="w-full h-[300px] xl:h-[600px] relative">
      <div
        className="absolute bg-cover top-0 left-0 w-full h-full bg-no-repeat bg-[center] xl:bg-[center_0]"
        style={{ backgroundImage: `url(${images.about_main})` }}
      ></div>
      <h1 className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white text-5xl md:text-6xl xl:text-7xl font-semibold">
        About Us
      </h1>
    </div>
  );
}
