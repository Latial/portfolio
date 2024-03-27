"use client";
import React from 'react'
import Link from 'next/link'
import NavLink from './NavLink'

const navLink = [
    {
        title : "About",
        path : "#about"
    },
    {
        title : "Skills",
        path : "#skills"
    },
    {
        title : "Projects",
        path : "#projects"
    },
    {
        title : "Career",
        path : "#career"
    },
]
const NavBar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-90">
            <div className="flex flex-wrap items-center justify-between mx-auto px-8 pt-4">
                <Link href={"/"}
                      className="text-4xl text-white font-semibold bg-gradient-to-r from-fromColor to-toColor w-20 h-20 rounded flex justify-center items-center">AS</Link>
                <div className="menu block md:w-auto" id="navbar">
                    <ul className="flex md:flex-row p-4 md:p-0 md:space-x-8 mt-0">
                        {
                            navLink.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <Link href="/#contact"
                          className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-fromColor to-toColor hover:from-pink-500 hover:to-yellow-500 text-white">
                        Download CV
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar