import { useState } from "react";
import QuoteCard from "../quotesCompo/quotes.jsx";
import content from "../content/content.jsx";
import Particles from "../reactBits/Particles/particleMain.jsx";


const Button = ({ children, path }) => {
    return (
        <button type="button" className="buttonAboutMe">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {path}
            </svg>
            {children}
        </button>
    )
}

export default function AboutMe() {
    const aboutMeContent = content.find(item => item.page === "about");

    return (
        <div id="aboutMe" className="container mx-auto min-h-screen flex items-start justify-center px-4">

            {/* particles background */}
            <Particles Top="100"/>

            <div className="flex flex-col items-center justify-around gap-14 w-full h-auto">
                <QuoteCard
                    quote={aboutMeContent.quote}
                    author={aboutMeContent.author}
                    image={aboutMeContent.image}
                />

                {/* about me content */}
                <div className="mx-auto flex flex-col border border-white bg-gradient-to-br bg-gray-800/80 rounded-md items-center justify-center gap-7 w-full h-full p-6">
                    <h1 className="text-white text-2xl font-bold">
                        {aboutMeContent.title}
                    </h1>
                    <p className="text-white text-base leading-relaxed font-medium text-center font-montserrat space-y-4">
                        {aboutMeContent.description}
                    </p>
                    <div className="flex flex-row items-center justify-center gap-4">
                        <Button
                            path={
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>}
                        >
                            Download CV
                        </Button>
                        <Button
                            path={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>}
                        >
                            Contact Me
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
