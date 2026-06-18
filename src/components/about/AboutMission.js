export default function AboutMission() {
  return (
    <div className="container max-w-screen-4k mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 xl:gap-20 px-4 sm:px-6 md:px-12 ">

      {/* Mission */}
      <div>
        <h1 className="text-text-primary font-sora font-semibold text-3xl sm:text-4xl xl:text-5xl leading-tight font-inter">
          Mission
        </h1>

        <h6 className="text-black mt-4 sm:mt-5 font-inter text-base sm:text-lg leading-relaxed">
          To serve freight forwarders worldwide with neutral logistics
          solutions, handling shipments to and from the U.S. with integrity,
          efficiency, and transparency.
        </h6>
      </div>

      {/* Vision */}
      <div>
        <h1 className="text-text-primary font-sora font-semibold text-3xl sm:text-4xl xl:text-5xl leading-tight font-inter">
          Vision
        </h1>

        <h6 className="text-black mt-4 sm:mt-5 font-inter text-base sm:text-lg leading-relaxed">
          To be recognized as the leading neutral logistics service provider
          in the USA, trusted by freight forwarders across the globe.
        </h6>
      </div>

    </div>
  );
}