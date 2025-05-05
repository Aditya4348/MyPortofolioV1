import { useState } from "react";
import Navbar from "./component/navbar";
import Hero from "./component/hero";
import AboutMe from "./component/aboutMe";
import Footer from "./component/footer";

export default function Homepage({className}) {
    return (
        <div className={className}>
            <Navbar />
            <Hero />
            <AboutMe />
            <Footer />
        </div>       
    )
}