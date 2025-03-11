import { FaCheck } from "react-icons/fa6";
import Image from "next/image"
export default function OurHappyCustomers(){
    return(
        <div className="overflow-x-hidden">



         {/* our happy customers */}

         <div>


           
            <div className="m-auto w-[255px]   lg:m-auto lg:w-[855px] ">
            <h1 className="font-extrabold text-[22px] pt-[22px] pb-[22px] leading-5 lg:text-[30px]">OUR HAPPY CUSTOMERS</h1>
                <div className="lg:grid lg:gap-5 lg:grid-cols-3         flex flex-col gap-5">


            <div className="border-[1px] border-[#0000001A] pt-[11px] pl-[11px] rounded-[20px] border-opacity-10 % w-[277px] h-[233px] ">
                <Image src="/image/Frame 10 (2).png" alt="logo" width={138.84} height={22.58}/>
                 <div className="flex gap-2">
                <h1>Sarah M.</h1>
                <FaCheck className="w-[19.5px] h-[19.5px] rounded-full text-white bg-[#01AB31]"/>
                </div>
                <p className="text-[#00000099] text-opacity-60 %">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
            </div>






            
          
            <div className="border-[1px] border-[#0000001A] pt-[11px] pl-[11px] rounded-[20px]  border-opacity-10 % w-[277px] h-[233px] ">
                <Image src="/image/Frame 10 (2).png" alt="logo" width={138.84} height={22.58}/>
                 <div className="flex gap-2">
                <h1>Alex K.</h1>
                <FaCheck className="w-[19.5px] h-[19.5px] rounded-full text-white bg-[#01AB31]"/>
                </div>
                <p className="text-[#00000099] text-opacity-60 %">"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
            </div>




            
          
            <div className="border-[1px] border-[#0000001A] pt-[11px] pl-[11px] rounded-[20px]  border-opacity-10 % w-[277px] h-[233px] ">
                <Image src="/image/Frame 10 (2).png" alt="logo" width={138.84} height={22.58}/>
                 <div className="flex gap-2">
                <h1>James L.</h1>
                <FaCheck className="w-[19.5px] h-[19.5px] rounded-full text-white bg-[#01AB31]"/>
                </div>
                <p className="text-[#00000099] text-opacity-60 %">"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
            </div>
         </div>
         </div>
         </div>
        </div>
    )
}