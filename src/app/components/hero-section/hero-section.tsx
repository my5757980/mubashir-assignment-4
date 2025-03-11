import Image from "next/image"
export default function HeroSection() {
    return (
        <div className="overflow-x-hidden">


            {/* hero section */}


            <div>


                <div className="h-[706px] bg-[#F2F0F1] lg:bg-[#F2F0F1] lg:h-[588px]   md:mt-[33px]   ">


                    <div className="m-auto w-[311px]  lg:m-auto lg:w-[790px]    ">
                        <div className="         lg:grid lg:gap-40 lg:grid-cols-2">

                            <div className="lg:col-span-1    lg:pt-[133px]       ">
                                <h1 className="font-extrabold text-[35px] leading-[33px] pt-[33px]  pb-[11px]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                                <p className="text-[#00000099] opacity-60% text-[14px] pb-[11px]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                                <button className="w-[258px] mb-[21px] text-white h-[52px] bg-black rounded-[62px] ">Shop Now</button>



                                <div className="m-auto w-[311px]   lg:m-auto lg:w-[500px]  ">
                                    <div className="grid gap-5 grid-cols-2      lg:grid lg:gap-5 lg:grid-cols-3    ">


                                        <div className="leading-[22px]">
                                            <h1 className="font-bold text-[26px]">200+</h1>
                                            <p className="text-[#00000099] opacity-60%">International Brands</p>
                                        </div>


                                        <div className="leading-[22px]">
                                            <h1 className="font-bold text-[26px]">2,000+</h1>
                                            <p className="text-[#00000099] opacity-60% text-nowrap">High-Quality Products</p>
                                        </div>


                                        <div className="leading-[22px] relative left-[88px]     lg:relative lg:left-[0px]    ">
                                            <h1 className="font-bold text-[26px]">30,000+</h1>
                                            <p className="text-[#00000099] opacity-60%">Happy Customers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="lg:col-span-1">
                                <Image className="lg:size-[555px]" src="/image/Rectangle_2__5_-removebg-preview.png" alt="logo" width={390} height={448} />
                                <Image className="relative bottom-[299px] lg:size-[111px]   lg:left-[266px] lg:relative lg:bottom-[477px] left-[255px]" src="/image/Vector (19).png" alt="logo" width={76} height={76} />
                                <Image className="relative bottom-[288px]   lg:size-[66px] lg:relative lg:left-[-22px] lg:bottom-[444px] left-[11px]" src="/image/Vector (20).png" alt="logo" width={44} height={44} />
                            </div>
                        </div>
                    </div>

                </div>



                <div className="bg-black lg:relative lg:bottom-[33px] mb-[44px] flex items-center h-[146px] ">
                    <div className="m-auto w-[322px]    lg:m-auto lg:w-[888px]      ">
                        <div className="grid gap-2 grid-cols-3     lg:grid lg:gap-2 lg:grid-cols-5">

                            <Image src="/image/Vector (21).png" alt="logo" width={116.74} height={23.25} />
                            <Image src="/image/Vector (22).png" alt="logo" width={116.74} height={23.25} />
                            <Image src="/image/Vector (23).png" alt="logo" width={116.74} height={23.25} />


                            <div className="m-auto w-[388px]   ">
                                <div className="grid gap-2 grid-cols-2">
                                    <Image className="" src="/image/Vector (24).png" alt="logo" width={116.74} height={23.25} />
                                    <Image className="" src="/image/Vector (26).png" alt="logo" width={116.74} height={23.25} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}