import { useState } from "react";
import Navbar from "./component/navbar.jsx";
import Hero from "./component/hero.jsx";
import AboutMe from "./component/aboutMe.jsx";
import Footer from "./component/footer.jsx";
import Warrior from "./assets/Wariors.png";
import Particles from './component/reactBits/Particles/Particles.jsx';



export default function Homepage({ className }) {

    // Navbar Content
    const NavbarContent = {
        title: "MyPortofolio",
    }

    // Hero Content
    const heroContent = {
        introduction: "Hi, I'm Aditya Alfitodinova",
        description: "I'm a passionate Web Developer focused on building modern, high-quality websites. I'm committed to growing continuously and staying up-to-date with the latest web technologies.",
        linkedIn: "https://www.linkedin.com/in/aditya-alfitodinova-3601332ab/",
        linkGit: "https://github.com/Aditya4348"
    }

    const aboutMeContent = {
        quote: "great achievements, Created from great sacrifices",
        author: "AdTorin",
        image: Warrior
    }


    return (
        <div className={className}>
            <div className="absolute top-0 left-0 w-full h-full">
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
            <Navbar text={NavbarContent} />
            <Hero text={heroContent} />
            <AboutMe text={aboutMeContent} />
            <Footer />
        </div>
    )
}