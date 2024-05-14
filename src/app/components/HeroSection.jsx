"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-primary-300">
                      Hello, I&apos;m{" "}
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            "Aleksandar",
                            1000,
                            "Software Dev",
                            1000,
                            "Web Dev",
                            1000,
                            "Mobile Dev",
                            1000,
                            "UI/UX Designer",
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg sm:mr-10 mb-6 lg:text-xl">
                    I am an enthusiastic and motivated front-end developer with a passion for creating intuitive and user-friendly web applications       
                </p>
                <div>
                    <Link href="https://www.linkedin.com/in/aleksandar-simic-sd/" className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 mb-5 bg-gradient-to-br from-secondary-500 to-primary-500 hover:from-pink-500 hover:to-yellow-500 text-white">
                        Hire Me
                    </Link>
                    <Link href="/cv/CV - Aleksandar Simić.pdf"
                          className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-secondary-500 to-primary-500 hover:from-pink-500 hover:to-yellow-500 text-white">
                        Download CV
                    </Link>
                </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src="/images/Image1.png"
                        alt="hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                    />
                </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
