import { images } from "@/utility/images";
import Image from "next/image";
import React from "react";

const OurTeam = () => {
  return (
    <div className="w-full py-24">
      <div className="container  max-w-screen-laptop-lg">
        <div className="w-full mb-12 flex justify-center">
          <h1 className=" text-4xl font-medium max-w-96 text-center text-surface-primary">
            We are the people who make up Untitled
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          <div>
            <Image
              src={images.team_2}
              width={0}
              height={0}
              className="w-56 mb-2 hover:grayscale-0 transition-all grayscale"
              alt="Team Member 1 "
            />
            <h2 className="text-sm font-medium text-text-primary">
              Lena Mathew
            </h2>
            <p className="text-xs font-light text-text-primary">
              Chief financial officer
            </p>
          </div>
          <div>
            <Image
              src={images.team_1}
              width={0}
              height={0}
              className="w-56 mb-2 hover:grayscale-0 transition-all grayscale"
              alt="Team Member 1 "
            />
            <h2 className="text-sm font-medium text-text-primary">
               Mathew John
            </h2>
            <p className="text-xs font-light text-text-primary">
            Manager
            </p>
          </div>{" "}
          <div>
            <Image
              src={images.team_3}
              width={0}
              height={0}
              className="w-56 mb-2 hover:grayscale-0 transition-all grayscale"
              alt="Team Member 1 "
            />
            <h2 className="text-sm font-medium text-text-primary">
              John
            </h2>
            <p className="text-xs font-light text-text-primary">
              Chief technical officer
            </p>
          </div>{" "}
          <div>
            <Image
              src={images.team_1}
              width={0}
              height={0}
              className="w-56 mb-2 hover:grayscale-0 transition-all grayscale"
              alt="Team Member 1 "
            />
            <h2 className="text-sm font-medium text-text-primary">
              Lena Mathew
            </h2>
            <p className="text-xs font-light text-text-primary">
              Chief financial officer
            </p>
          </div>
          <div>
            <Image
              src={images.team_2}
              width={0}
              height={0}
              className="w-56 mb-2 hover:grayscale-0 transition-all grayscale"
              alt="Team Member 1 "
            />
            <h2 className="text-sm font-medium text-text-primary">
              Lena Mathew
            </h2>
            <p className="text-xs font-light text-text-primary">
              Chief financial officer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
