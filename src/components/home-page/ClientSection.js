import React from "react";

const ClientCard = ({ content }) => {
  return (
    <div
      className="py-20 border-b [&:not(:last-child)]:border-r text-center text-xl mobile-lg:text-2xl laptop:text-3xl font-semibold cursor-pointer text-dark relative before:[content:'']
     before:absolute before:top-0 before:left-0 before:w-full before:h-full before:scale-y-0 before:origin-bottom 
     before:duration-500 hover:text-white	 hover:before:scale-y-100 transition-all duration-500 before:transition-all
   before:bg-text-primary "
    >
      <p className="relative z-10 ">{content}</p>
    </div>
  );
};

const ClientSection = () => {
  const data = [
    "H&M",
    "Adidas",
    "Puma",
    "Reebok",
    "Nike",
    "Asics",
    "New Balance",
    "Skechers",
  ];

  return (
    <>
    
    <section className="w-full">
      <div className="grid grid-cols-2 tablet-lg:grid-cols-4 ">
        {data?.map((item) => {
          return <ClientCard key={item} content={item} />;
        })}
      </div>
    </section>
    </>
  );
  
};

export default ClientSection;
