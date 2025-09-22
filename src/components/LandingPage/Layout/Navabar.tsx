import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navabar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white h-[var(--navbar-height)] flex items-center justify-between p-5 lg:px-10 border-b border-[#D2D1D0] z-50">
      <div className="w-[200px]">
        <h3 className="font-[600] text-[32px] ">
          <Image src="/icons/logo-no-bg.png" alt="" width={100} height={100} />
        </h3>
      </div>
      <div className="lg:flex items-end gap-[24px] font-semibold text-[16px] hidden">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">How it works</Link>
        <Link href="/">FAQs</Link>
        <Link href="/">Pricing</Link>
      </div>
      <div className="space-x-5 hidden lg:flex">
        <Button className="bg-gradient-to-r rounded-[100px] from-[#012770] via-[#3651BB] to-[#6C6CD3] text-white h-[45px] text-[13px] font-semibold">
          Find a Surrogate
        </Button>
        <Button className="border border-[#E7E7EE] rounded-[100px] h-[45px] text-[13px] font-semibold bg-white hover:bg-white">
          <p className="bg-gradient-to-r from-[#6C6CD3] to-[#092D7B] bg-clip-text text-transparent">
            Become a Surrogate
          </p>
        </Button>
      </div>
    </nav>
  );
};

export default Navabar;
