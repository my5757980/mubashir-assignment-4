'use client'

import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { ImCross } from "react-icons/im";
import { FaRegUserCircle } from "react-icons/fa";
import ResponsiveMenu from "../responsive-menu/responsive-menu";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className="overflow-x-hidden">





      {/*  */}

      <div >



        <div className="md:h-[38px] md:bg-black md:flex md:items-center md:justify-center   hidden">
          <h1 className="md:text-white ">Sign up and get 20% off to your first order. Sign Up Now</h1>
          <ImCross className="md:text-white md:relative md:left-[99px] lg:relative lg:left-[222px]" />
        </div>




        <div className="hidden md:flex md:items-center md:mt-[18px] lg:flex lg:items-center lg:mt-[18px] md:m-auto md:w-[769px]                 lg:m-auto lg:w-[911px] ">
          <h1 className="md:font-extrabold md:text-[28px]">SHOP.CO</h1>




          <div className="md:flex md:flex-row md:gap-3  md:relative md:left-[18px]      ">


            <Link href="Shop">Shop</Link>
            <RiArrowDropDownLine className="md:size-6 md:relative md:right-[11px]" />
            <Link href="OnSale">OnSale</Link>
            <Link href="NewArrivals">NewArrivals</Link>
            <Link href="Brands">Brands</Link>
          </div>





          <input placeholder="Search for products..." className="md:pl-[55px] lg:pl-[55px]  md:relative md:left-[28px] md:w-[211px] lg:w-[355px] md:rounded-[62px] md:h-[48px]  md:bg-[#F0F0F0]" />
          <CiSearch className="md:size-8 md:text-[#00000066]  md:opacity-40 md:relative md:right-[177px] lg:relative lg:right-[322px] " />


          <div className="md:flex md:gap-3">
            <PiShoppingCartSimpleDuotone className="md:size-8" />
            <FaRegUserCircle className="md:size-8" />
          </div>

        </div>



        {/* Mobile Hamburger */}

        <div className="w-full flex flex-row justify-end items-center md:hidden" onClick={() =>
          setOpen(!open)
        }>

          <GiHamburgerMenu className="size-16 pr-5" />

        </div>
        {/* Mobile Sidebar */}
        <ResponsiveMenu open={open} />

      </div>
    </div>


  )
}