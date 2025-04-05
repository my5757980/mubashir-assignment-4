import { FaApple, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
export default function Footer() {
  return (
    <div className="overflow-x-hidden">






      {/* footer */}
      <div className="lg:mt-[-99px]">

        <div className="h-[220px] rounded-[20px] bg-black  mt-[111px]   md:flex md:flex-row  md:items-center   lg:relative lg:top-[122px]">
          <div className="md:m-auto md:w-[800px]">
            <div className="md:grid md:gap-5 md:grid-cols-2              ">
              <p className="text-white font-bold text-[22px] md:font-extrabold md:text-[25px] pt-[22px] text-center leading-6 pb-[22px]">STAY UPTO DATE ABOUT <br />OUR LATEST OFFERS</p>
              <div className="flex flex-col items-center ">
                <input placeholder="Enter your email address" className="w-[300px] text-center   text-[#00000066] opacity-40% h-[48px] bg-white rounded-[62px]" />
                <IoIosMail className="text-[#00000066] opacity-40% size-7  relative bottom-[40px] right-[111px]" />
                <h1 className="w-[300px] mt-[-17px]  pt-[14px] pl-[66px]  text-black h-[48px] bg-white rounded-[62px]">Subscribe to Newsletter</h1>
              </div>

            </div>
          </div>
        </div>






        <div className=" h-[1146px]  bg-[#F0F0F0] lg:flex lg:items-center         md:flex md:items-center        sm:flex sm:items-center     flex items-center">
          <div className="m-auto w-[166px]       lg:m-auto lg:w-[988px]              md:m-auto md:w-[433px]">




            <div className="lg:grid lg:gap-5 lg:grid-cols-5           md:grid md:gap-10 md:grid-cols-2">

              <div>
                <h1 className="font-extrabold text-[20px] lg:text-[25px] lg:pb-[11px] ">SHOP.CO</h1>
                <p className="pb-[11px] text-[#00000099] opacity-60%">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                <div className="flex gap-3 pb-[22px]">
                  <FaTwitter className="border-[1px]  w-[33px] rounded-full h-[33px]   p-1  border-[#00000033] opacity-20%  bg-white " />
                  <RiFacebookCircleFill className="size-9" />
                  <FaInstagram className="size-9 border-[1px] p-1 border-[#00000033] opacity-20% bg-white w-[33px] h-[33px] rounded-full" />
                  <FaGithub className="size-9 border-[1px] p-1  border-[#00000033] opacity-20%   bg-white rounded-full w-[33px] h-[33px] " />
                </div>
              </div>



              <div className="flex flex-col gap-2">
                <h1 className="font-bold">Company</h1>
                <h2 className="text-[#00000099] opacity-60%">About </h2>
                <h2 className="text-[#00000099] opacity-60%">Features</h2>
                <h2 className="text-[#00000099] opacity-60%">Works</h2>
                <h2 className="text-[#00000099] opacity-60% pb-[22px] sm:pb-[22px] md:pb-[0px] lg:pb-[0px]">Career</h2>
              </div>



              <div className="flex flex-col gap-2">
                <h1 className="font-bold">HELP</h1>
                <h2 className="text-[#00000099] opacity-60%">Customer Support</h2>
                <h2 className="text-[#00000099] opacity-60%">Delivery Details</h2>
                <h2 className="text-nowrap text-[#00000099] opacity-60% ">Terms & Conditions</h2>
                <h2 className="text-[#00000099] opacity-60%  pb-[22px] sm:pb-[22px] md:pb-[0px] lg:pb-[0px]">Privacy Policy</h2>
              </div>









              <div className="flex flex-col gap-2">
                <h1 className="font-bold">FAQ</h1>
                <h2 className="text-[#00000099] opacity-60%">Account </h2>
                <h2 className="text-[#00000099] opacity-60%">Manage Deliveries</h2>
                <h2 className="text-[#00000099] opacity-60%">Orders</h2>
                <h2 className="text-[#00000099] opacity-60% pb-[22px] sm:pb-[22px] md:pb-[0px] lg:pb-[0px]">Payment</h2>
              </div>



              <div className="flex flex-col gap-2">
                <h1 className="font-bold">RESOURCES</h1>
                <h2 className="text-[#00000099] opacity-60%">Free eBook</h2>
                <h2 className="text-[#00000099] opacity-60%">Development Tutorial</h2>
                <h2 className="text-[#00000099] opacity-60%">How to - B log</h2>
                <h2 className="text-[#00000099] opacity-60% pb-[22px]">Youtube Playlist</h2>
              </div>
            </div>
          </div>

        </div>










        <div className=" relative  bottom-[111px]    md:relative  md:bottom-[255px]    lg:relative  lg:bottom-[453px]">
          <div className="m-auto w-[315px]  md:m-auto md:w-[488px]  lg:m-auto lg:w-[688px]">
            <hr className="border-t-2 w-[322px] md:w-[488px] lg:w-[655px]  border-[#0000001A]   pb-[11px]   opacity-10% " />
          </div>


          <h1 className="text-nowrap pb-[11px]   text-[#00000099] text-center opacity-60%">Shop.co © 2000-2023, All Rights Reserved</h1>

          <div className="flex flex-row gap-2 justify-center ">
            <h1 className="flex text-[#1434CB] font-bold italic  justify-center rounded-[5.38px] w-[55px] bg-white items-center  h-[33px] border-[1px] border-[#D6DCE5]">VISA</h1>
            <Image className="rounded-[5.38px] w-[55px] bg-white p-1 h-[33px] border-[1px] border-[#D6DCE5]" src="/image/Mastercard.png" alt="logo" width={25.38} height={15.69} />

            <h1 className="  rounded-[5.38px] w-[66px] flex justify-center  place-items-center   bg-white  h-[33px] border-[1px] border-[#D6DCE5]">
              <span className="italic font-bold  text-[15px] text-blue-900">Pay </span>
              <span className="text-blue-500 text-[15px] font-bold italic">Pal</span>
            </h1>

            <div className="flex border-[1px] border-[#D6DCE5] rounded-[5.38px]  bg-white w-[55px]  items-center h-[33px]">
              <FaApple className="" />
              <h1 className="font-bold">Pay</h1>
            </div>

            <div className="flex   border-[1px] border-[#D6DCE5] rounded-[5.38px]  bg-white w-[55px]  items-center h-[33px]">
              <FcGoogle className="" />
              <h1 className="">Pay</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}