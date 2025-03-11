import Image from "next/image"
export default function NewArrivals(){
    return(
        <div className="overflow-x-hidden">




{/* new arrivals */}

          <div>
               <div className="m-auto w-[288px]  md:m-auto md:w-[577px]   lg:m-auto lg:w-[988px]">
                <div className="md:grid md:gap-10 md:grid-cols-2     lg:grid lg:gap-2 lg:grid-cols-4          flex flex-col gap-5">

                 <div>   
            <h1 className="text-black text-[33px] font-extrabold text-nowrap md:relative md:left-[155px]    lg:relative lg:left-[370px]  pb-[33px]">NEW ARRIVALS</h1>
            <Image className="pb-[11px]"src="/image/Frame 32 (2).png" alt="logo" width={295} height={298}/>
            <h1 className="font-bold">T-SHIRT WITH TAPE DETAILS</h1>
            <div className="flex gap-2">
            <Image src="/image/Frame 10 (1).png" alt="logo" width={104} height={18.49}/>
            <h1 className="text-[#00000066] bg-opacity-40 %">4.5/5</h1>
            </div>
            <h1 className="font-extrabold">$120</h1>
            </div>



             

             <div className="md:pt-[80px]">
            <Image className="pb-[11px]"src="/image/Frame 33 (2).png" alt="logo" width={295} height={298}/>
            <h1 className="font-bold">SKINNY FIT JEANS</h1>
            <div className="flex gap-2">
            <Image src="/image/Frame 10 (1).png" alt="logo" width={104} height={18.49}/>
            <h1 className="text-[#00000066] bg-opacity-40 %">3.5/5</h1>
            </div>
            <div className="flex gap-2">
                <h1 className="font-extrabold ">$240</h1>
                <h1 className="line-through text-[#00000066] bg-opacity-40 %">$260</h1>
                <h1 className="w-[58px] rounded-[62px] h-[28px]   bg-[#FF3333] bg-opacity-10 %  flex items-center justify-center text-[#FF3333]">-20%</h1>
           </div>
           </div>




             
             <div className="lg:pt-[80px]">
            <Image className="pb-[11px]"src="/image/Frame 34 (2).png" alt="logo" width={295} height={298}/>
            <h1 className="font-bold">CHECKERED SHIRT</h1>
            <div className="flex gap-2">
            <Image src="/image/Frame 10 (1).png" alt="logo" width={104} height={18.49}/>
             <h1 className="text-[#00000066] bg-opacity-40 %">4.5/5</h1>
             </div>
             <h1 className="font-extrabold">$180</h1>
            </div>




            <div  className="lg:pt-[80px]">
            <Image className="pb-[11px]"src="/image/Frame 38 (2).png" alt="logo" width={295} height={298}/>
            <h1 className="font-bold">SLEEVE STRIPED T-SHIRT</h1>
            <div className="flex gap-2">
            <Image src="/image/Frame 10 (1).png" alt="logo" width={104} height={18.49}/>
            <h1 className="text-[#00000066] bg-opacity-40 %">4.5/5</h1>
            </div>
                 
                 <div className="flex gap-2">
                <h1 className="font-extrabold">$130</h1>
                <h1 className="line-through text-[#00000066] bg-opacity-40 %">$160</h1>
                <h1 className="w-[58px] rounded-[62px] h-[28px]   bg-[#FF3333] bg-opacity-10 %  flex items-center justify-center           text-[#FF3333]   ">-30%</h1>
           </div>
          </div>
          </div>
          </div>







          
          <div className="flex flex-col justify-center place-items-center">
                    <button className=" mb-[55px] mt-[22px] text-center font-bold text-black border-[1px] border-[#0000001A]  border-opacity-10 % w-[218px] h-[52px rounded-[62px]">View All</button >
                

                 <hr className="border-t-2 w-[300px] md:w-[455px]  lg:w-[655px] border-[#0000001A] border-opacity-10 %  "/>
                  </div>
          </div>
        </div>
    )
}