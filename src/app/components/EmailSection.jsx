﻿"use client";

import {React, useState} from "react";
import GithubIcon from '../../../public/github-icon.svg'
import LinkedInIcon from '../../../public/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
    const [emailSubmitted, isSubmitted] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email : e.target.email.value,
            subject : e.target.subject.value,
            message : e.target.email.value
        };
        const JSONData = JSON.stringify(data);
        const endPoint = '/api/send';
        
        const options = {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSONData,
        }
        const response = await fetch(endPoint, options);
        //const resData = await response.json();
        if (response.status === 200) {
            console.log('Message sent successfully')
            isSubmitted(true);
        }
    };
    return (
        <section className="grid md:grid-cols-2 my-12 md-my-12 py-24 gap-4 relative">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="z-10">
                <h5 className="text-2xl font-bold">Let's Connect!</h5>
                <p className="text-[#ADB7BEE] mb-4 max-w-md">
                    {" "}
                    Hey there! Ready to collaborate on something awesome?
                    Whether it's a new job opportunity or a freelance gig, I'm all ears!
                    Drop me a line below and let's turn ideas into reality. Can't wait to chat! 🚀
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/Latial">
                        <Image src={GithubIcon} alt="Github Icon"/>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/aleksandar-simic-sd?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                        <Image src={LinkedInIcon} alt="LinkedIn Icon"/>
                    </Link>
                </div>
            </div>
            <div className= "z-10">
                <form className="flex flex-col" onSubmit = {handleSubmit}>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="text-white block mb-2 text-sm font-medium"
                        >
                            Your email
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="jacob@google.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="subject"
                            className="text-white block text-sm mb-2 font-medium"
                        >
                            Subject
                        </label>
                        <input
                            name="subject"
                            type="text"
                            id="subject"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Just saying hi"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="text-white block text-sm mb-2 font-medium"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Let's talk about..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
                        Send Message
                    </button>
                    {
                        emailSubmitted && (
                            <p className= "text-green-500 text-sm mt-2">
                                Email sent successfully. Thank you! 
                            </p>
                        )
                    }
                </form>
            </div>
        </section>
    )
}
export default EmailSection;