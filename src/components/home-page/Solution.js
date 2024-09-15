import Link from "next/link";
import React from "react";

const Solution = () => {
  return (
    <div className="w-full bg-surface-primary">
      <div className="container max-w-screen-4k py-12">
        <div className="w-full flex-col tablet:flex-row items-start py-6 flex justify-between">
          <h1 className="text-5xl font-semibold text-white max-w-[400px] ">
            Solutions That Make Changes
          </h1>
          <Link
            className="px-7 py-3 text-sm whitespace-nowrap bg-text-primary text-white rounded-full inline-block mt-4"
            href={"#"}
          >
            View More
          </Link>
        </div>
        <div>
          <div className="flex gap-3 flex-col tablet:flex-row w-full justify-between py-10 border-t">
            <h1 className="text-8xl font-bold text-white">01</h1>
            <p className="text-2xl text-left font-semibold text-white">
              Long Distance Moves
            </p>
            <p className="text-white  max-w-[400px] font-light">
              *Lorem ipsum dolor sit amet, id has nihil discere periculis. No
              novum cu labor probatus
            </p>
          </div>{" "}
          <div className="flex gap-3 w-full justify-between py-10 border-t flex-col tablet:flex-row">
            <h1 className="text-8xl font-bold text-white">02</h1>
            <p className="text-2xl text-left font-semibold text-white">
              International Moves
            </p>
            <p className="text-white max-w-[400px] font-light">
              *Lorem ipsum dolor sit amet, id has nihil discere periculis. No
              novum cu labor probatus
            </p>
          </div>{" "}
          <div className="flex gap-3 w-full justify-between py-10 border-t flex-col tablet:flex-row">
            <h1 className="text-8xl font-bold text-white">03</h1>
            <p className="text-2xl text-left font-semibold text-white">
              Corporate Moves
            </p>
            <p className="text-white max-w-[400px] font-light">
              *Lorem ipsum dolor sit amet, id has nihil discere periculis. No
              novum cu labor probatus
            </p>
          </div>{" "}
          <div className="flex gap-3 w-full justify-between py-10 border-t flex-col tablet:flex-row">
            <h1 className="text-8xl font-bold text-white">04</h1>
            <p className="text-2xl text-left font-semibold text-white">
              Local Moves in Town
            </p>
            <p className="text-white max-w-[400px] font-light">
              *Lorem ipsum dolor sit amet, id has nihil discere periculis. No
              novum cu labor probatus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
