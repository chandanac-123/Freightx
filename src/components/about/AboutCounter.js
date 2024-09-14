export default function AboutCounter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-20 px-6 pt-10 md:px-12 xl:px-12 xl:pt-10 pb-40">
      <div className="text-center xl:text-left">
        <h1
          id="services-count"
          className="counter text-text-primary font-semibold text-7xl font-inter"
        ></h1>
        <h6 className="text-black mt-2 font-sora whitespace-nowrap">
          Services provide monthly
        </h6>
      </div>
      <div className="text-center">
        <h1
          id="semitrailers-count"
          className="counter text-text-primary font-semibold text-7xl font-inter"
        ></h1>
        <h6 className="text-black mt-2 font-sora whitespace-nowrap">
          Truck plus semitrailers
        </h6>
      </div>
      <div className="text-center">
        <h1
          id="customers-count"
          className="counter text-text-primary font-semibold text-7xl font-inter"
        ></h1>
        <h6 className="text-black mt-2 font-sora whitespace-nowrap">
          Satisfied customers
        </h6>
      </div>
      <div className="text-center xl:text-right">
        <h1
          id="air-transportations-count"
          className="counter text-text-primary font-semibold text-7xl font-inter"
        ></h1>
        <h6 className="text-black mt-2 font-sora whitespace-nowrap">
          Air transportations
        </h6>
      </div>
    </div>
  );
}
