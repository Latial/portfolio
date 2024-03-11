import React from 'react';
import Image from "next/image";
const HeroSection = () => {
    return (
        <header>
            <section>
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="col-span-7 place-self-center">
                        <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Hello, my name is Aleksandar</h1>
                        <p className="text-[#ADB7BE] text-lg lg:text-xl">I am an enthusiastic and motivated front-end developer with a passion for creating intuitive 
                            and user-friendly
                            web applications. I am currently finishing my studies in Information and Communications Technology and have
                            acquired a strong foundation in both JavaScript and React. I have completed various projects, honing my skills in
                            creating dynamic and responsive user interfaces, incorporating modern design principles, and utilizing APIs to
                            bring data to life</p>
                    </div>
                    <div className = "col-span-5 place-self-center">
                        <div className= "rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                            <Image src = "" alt = "hero Img" width = {300} height = {500} className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left 1/2"/>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default HeroSection;