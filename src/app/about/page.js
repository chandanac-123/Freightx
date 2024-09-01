import { images } from "@/utility/images";

export default function Page() {
  return (
    <div>
      <div className="w-full h-[300px] xl:h-[600px] relative">
        <div
          className="absolute bg-cover top-0 left-0 w-full h-full bg-no-repeat bg-[center] xl:bg-[center_0]"
          style={{ backgroundImage: `url(${images.about_main})` }}
        ></div>
        <h1 className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white text-5xl md:text-6xl xl:text-7xl font-semibold">
          About Us
        </h1>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-20 gap-y-10 px-6 py-28 md:px-12 xl:px-12 xl:py-28">
        <div>
          <h1 className="text-text-primary font-semibold text-4xl leading-[52px] md:leading-[48px] xl:text-5xl font-inter whitespace-pre-line">
            We Forward International
            <br />
            And Domestic Shipments
          </h1>
          <h6 className="text-black mt-10 font-sora whitespace-nowrap">
            Main areas – logistics and terminal.
          </h6>
        </div>
        <div className="md:max-w-[480px] xl:max-w-full">
          <h6 className="text-black font-sora">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </h6>
          <h6 className="text-black mt-5 font-sora">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.Better use of existing infra
            structure with point to point connections.
          </h6>
        </div>
      </div>
    </div>
  );
}
