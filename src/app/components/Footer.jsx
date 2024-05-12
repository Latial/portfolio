import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className= "footer border border-t-[#33353f] border-l-transparent border-r-transparent">
            <div className="container p-12 flex justify-between">
                <span className="">
                <Link href={"/"}
                      className="lg:text-4xl text-2xl text-white font-semibold bg-gradient-to-r from-black to-white lg:w-16 lg:h-16 w-12 h-12 rounded flex justify-center items-center">AS
                </Link>
                    <p>Aleksandar Simic</p>
                </span>
                <p className="text-slate-600 self-center flex flex-col">
                    &#169; COPYRIGHT
                    All Rights reserved
                </p>
            </div>
        </footer>
    )
}
export default Footer;