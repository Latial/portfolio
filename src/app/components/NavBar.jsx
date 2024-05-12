"use client";
import React, {useState} from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'

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
    const [navBarOpen, setNavBarOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-90">
            <div className="flex flex-wrap items-center justify-between mx-auto px-8 pt-4 pt-2">
                <Link href={"/"}
                      className="lg:text-4xl text-2xl font-semibold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent flex justify-center items-center">AS</Link>
                <div className="mobile-menu block md:hidden">
                    {
                        !navBarOpen ?(
                            <button onClick={() => setNavBarOpen(true)} className = "flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <Bars3Icon className = "h-5 w-5"/>
                            </button>
                        ): (
                            <button onClick={() => setNavBarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <XMarkIcon className="h-5 w-5"/>
                            </button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex md:flex-row items-center p-4 md:p-0 md:space-x-8 mt-0">
                        {
                            navLink.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {navBarOpen ? <MenuOverlay links = {navLink}/>
                : null}
        </nav>
    );
}

export default NavBar