"use client";

import { Divide as Hamburger } from "hamburger-react";

export default function MobileHeader() {
  return (
    <div className="flex xl:hidden bg-text-secondary h-full items-center justify-center w-24">
      <Hamburger />
    </div>
  );
}
