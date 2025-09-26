export default function AboutMission() {
  return (
    <div className="grid container max-w-screen-4k grid-cols-2 xl:grid-cols-2 gap-x-20 gap-y-10 px-6 py-2 md:px-12 xl:px-12 xl:py-1">
      <div>
        <h1 className="text-text-primary font-semibold text-4xl leading-[52px] md:leading-[48px] xl:text-5xl font-inter whitespace-pre-line">
          Mission
        </h1>
        <div className="md:max-w-[480px] xl:max-w-full">
          <h6 className="text-black mt-5 font-sora">
            To serve freight forwarders worldwide with neutral logistics
            solutions, handling shipments to and from the U.S. with integrity,
            efficiency, and transparency.
          </h6>
        </div>
      </div>
      <div className="md:max-w-[480px] xl:max-w-full">
        <div>
          <h1 className="text-text-primary font-semibold text-4xl leading-[52px] md:leading-[48px] xl:text-5xl font-inter whitespace-pre-line">
            Vision
          </h1>
          <div className="md:max-w-[480px] xl:max-w-full">
            <h6 className="text-black mt-5 font-sora">
              To be recognized as the leading neutral logistics service provider
              in the USA, trusted by freight forwarders across the globe.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
