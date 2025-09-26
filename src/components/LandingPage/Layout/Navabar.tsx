import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import StoreButtons from "../StoreButtons";

const Navabar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white h-[var(--navbar-height)] flex items-center justify-between p-5 lg:px-10 border-b border-[#D2D1D0] z-50">
      <div className="w-[200px]">
        <h1 className="bg-gradient-to-r from-[#6C6CD3] to-[#092D7B] text-transparent bg-clip-text text-[24px] font-[600]">
          Surro
        </h1>
      </div>
      {/* mobile menu  */}
      <div className="block lg:hidden">
        <Menu size={40} cursor={"pointer"} />
      </div>

      {/* links  */}
      <div className="lg:flex items-end gap-[24px] font-semibold text-[16px] hidden">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">How it works</Link>
        <Link href="/">FAQs</Link>
        <Link href="/">Pricing</Link>
      </div>

      {/* buttons s */}
      <div className="hidden lg:block">
        <StoreButtons />
      </div>
    </nav>
  );
};

export default Navabar;
