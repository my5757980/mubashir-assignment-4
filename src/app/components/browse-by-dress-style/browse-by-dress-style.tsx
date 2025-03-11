import Image from "next/image"

export default function BrowseByDressStyle(){
    return(

        <div className="overflow-x-hidden">




           {/* browse by dress style */}

           <div className="h-[875px] md:h-[475px] rounded-[20px] md:rounded-[40px] md:bg-[#F0F0F0] bg-[#F0F0F0]">
             
          
             <div className="m-auto w-[277px] md:m-auto md:w-[588px]   ">
             <h1 className="font-extrabold  text-[32px]  md:flex md:justify-center     flex flex-col justify-center  place-items-center text-center leading-7 pb-[22px] pt-[22px]">BROWSE BY DRESS STYLE</h1>
             <div className="md:grid md:gap-2 md:grid-cols-2               flex flex-col gap-5">

             <Image src="/image/Frame 105 (1).png" alt="logo" width={310} height={190} />
             <Image className=" "src="/image/Frame 106.png" alt="logo" width={310} height={190} />
             <Image className=" "src="/image/Frame 107.png" alt="logo" width={310} height={190} />
             <Image src="/image/Frame 108.png" alt="logo" width={310} height={190} />
           </div>
           </div>
           </div>
        </div>
    )
}