import { useState } from "react";
import Orb from './reactBits/Orb/Orb';
import GradientText from './reactBits/GradientText/GradientText';
import Button from './heroCompo/button';

export default function Hero() {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-between container mx-auto px-4 py-5 gap-5 md:p-8 min-h-[80vh] w-full">
            {/* Left side - Text content */}
            <div className="flex-1 p-4 md:p-0 mt-10 max-w-2xl text-center md:text-left">
                <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 font-montserrat"
                >
                    Hi, I'm Aditya Alfitodinova
                </GradientText>
                <p className="text-base md:text-lg leading-relaxed text-white mb-6 md:mb-8 font-lato">
                    I’m a passionate Web Developer focused on building modern, high-quality websites.
                    I’m committed to growing continuously and staying up-to-date with the latest web technologies.
                </p>
                <Button>
                    <img src="" alt="" />
                    My LinkedIn
                </Button>
            </div>

            {/* Right side - Image */}
            <div className="flex-1 flex justify-center items-center mt-8 md:mt-0 w-full md:w-auto">
                <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
                    <Orb
                        hoverIntensity={0.5}
                        rotateOnHover={true}
                        hue={0}
                        forceHoverState={false}
                    />
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}
