import Image from "next/image"
export default function TopSelling() {
    return (
        <div className="overflow-x-hidden">



            {/* top selling */}


            <div>





                <div className="m-auto w-[288px]  md:m-auto md:w-[577px]   lg:m-auto lg:w-[988px]">
                    <div className="md:grid md:gap-10 md:grid-cols-2     lg:grid lg:gap-2 lg:grid-cols-4    flex flex-col gap-5">

                        <div>
                            <h1 className="text-black text-[38px]  font-extrabold text-nowrap md:relative md:left-[155px]    lg:relative lg:left-[370px] pt-[44px] pb-[33px]">TOP SELLING</h1>
                            <Image className="pb-[11px]" src="/image/Frame 32 (3).png" alt="logo" width={295} height={298} />
                          
                            <h1 className="font-bold">VERTICAL STRIPED SHIRT</h1>
                            <div className="flex gap-2">
                                <Image src="/image/Frame 10 (1).png" alt="logo" width={104} height={18.49} />
                                <h1 className="text-[#00000066] bg-opacity-40 %">5.0/5</h1>
                            </div>

                            <div className="flex gap-2">
                                <h1 className="font-extrabold">$212</h1>
                                <h1 className="line-through text-[#00000066] bg-opacity-40 %">$232</h1>
                                <h1 className="w-[58px] rounded-[62px] h-[28px]   bg-[#FF3333] bg-opacity-10 %  flex items-center justify-center text-[#FF3333]">-20%</h1>
                            </div>
                        </div>





                        <div className="md:pt-[133px]">
                            <Image className="pb-[11px]" src="/image/Frame 33 (3).png" alt="logo" width={295} height={298} />
                            <h1 className="font-bold">COURAGE GRAPHIC T-SHIRT</h1>
                            <div className="flex gap-2">
                                <Image src="/image/Frame 10 (1).png" alt="logo" width={104} height={18.49} />
                                <h1 className="text-[#00000066] bg-opacity-40 %">4.0/5</h1>
                            </div>
                            <h1 className="font-extrabold">$145</h1>
                        </div>





                        <div className="lg:pt-[133px]">
                            <Image className="pb-[11px]" src="/image/Frame 34 (3).png" alt="logo" width={295} height={298} />
                            <h1 className="font-bold">LOOSE FIT BERMUDA SHORTS</h1>
                            <div className="flex gap-2">
                                <Image src="/image/Frame 10 (1).png" alt="logo" width={104} height={18.49} />
                                <h1 className="text-[#00000066] bg-opacity-40 %">3.0/5</h1>
                            </div>
                            <h1 className="font-extrabold">$80</h1>
                        </div>




                        <div className="lg:pt-[133px]">
                            <Image className="pb-[11px]" src="/image/Frame 38 (3).png" alt="logo" width={295} height={298} />
                            <h1 className="font-bold">FADED SKINNY JEANS</h1>
                            <div className="flex gap-2">
                                <Image src="/image/Frame 10 (1).png" alt="logo" width={104} height={18.49} />
                                <h1 className="text-[#00000066] bg-opacity-40 %">4.5/5</h1>
                            </div>
                            <h1 className="font-extrabold">$210</h1>
                        </div>
                    </div>
                </div>



                
          <div className="flex flex-col justify-center place-items-center">
                    <button className=" mb-[55px] mt-[22px] text-center font-bold text-black border-[1px] border-[#0000001A]  border-opacity-10 % w-[218px] h-[52px rounded-[62px]">View All</button >
                
                  </div>

                  
            </div>

        </div>
    )
}