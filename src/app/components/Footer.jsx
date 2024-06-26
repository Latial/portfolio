﻿import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className= "footer border border-t-[#33353f] border-l-transparent border-r-transparent">
            <div className="container p-12 flex justify-between">
                <span className="">
                <Link href={"/"} className="lg:text-4xl text-2xl font-semibold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent flex justify-center items-center">
                    AS
                </Link>
                    <p className= "hidden md:block lg:block">Aleksandar Simic</p>
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