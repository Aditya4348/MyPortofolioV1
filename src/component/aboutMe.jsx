import { useState } from "react";
import Particles from "./reactBits/Particles/Particles.jsx";
import QuoteCard from "./quotesCompo/quotes.jsx";

export default function AboutMe({text}) {
    return (
        <div className="container mx-auto min-h-screen bg-black flex items-center justify-center px-4">
            <div className="absolute top-100 left-0 w-full h-full">
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={500}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={false}
                    alphaParticles={true}
                    disableRotation={false}
                />
            </div>
            <QuoteCard
                quote={text.quote}
                author={text.author}
                image={text.image}
            />
            <h1>AboutMe</h1>
        </div>
    )
}   
