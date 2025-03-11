import Link from "next/link"
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
const ResponsiveMenu = ({ open }: any) => {
    return (
        <div>
            <AnimatePresence mode="wait">

                {
                    open && (
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}

                            className="left-0 w-full h-screen z-20">

                            <div className="md:hidden rounded-3xl m-5 py-10 bg-cyan-800">
                                <ul className="flex flex-col justify-center items-center gap-10">

                                    <p className="flex cursor-pointer items-center">
                                        <li className="text-[20px] font-bold underline text-white">
                                            <Link href="Shop">Shop</Link>
                                        </li>
                                        <li className="text-[20px] font-bold underline text-white">
                                            <RiArrowDropDownLine className="size-6" />
                                        </li>
                                    </p>
                                    <li className="text-[20px] font-bold underline text-white">
                                        <Link href="OnSale">OnSale</Link>
                                    </li>
                                    <li className="text-[20px] font-bold underline text-white">
                                        <Link href="NewArrivals">NewArrivals</Link>
                                    </li>
                                    <li className="text-[20px] font-bold underline text-white">
                                        <Link href="Brands">Brands</Link>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    )
                }

            </AnimatePresence>

        </div>
    )
}


export default ResponsiveMenu



