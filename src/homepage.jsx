import { useState } from "react";
import Navbar from "./component/navbar.jsx";
import Hero from "./component/hero.jsx";
import AboutMe from "./component/aboutMe.jsx";
import Footer from "./component/footer.jsx";



export default function Homepage({className, text}) {
    
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


    return (
        <div className={className}>
            <Navbar text={NavbarContent} />
            <Hero text={heroContent} />
            <AboutMe />
            <Footer />
        </div>       
    )
}