import { images } from "@/utility/images";

export default function AboutMain() {
  return (
    <div className="w-full h-[300px] xl:h-[600px] relative">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-[center] xl:bg-[center_0]"
        style={{ backgroundImage: `url(${images.about_main})` }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <h1 className="absolute inset-0 flex font-sora justify-center items-center text-white text-5xl md:text-6xl xl:text-7xl font-semibold">
        Who We Are
      </h1>
    </div>
  );
}