import Navbar from "./component/navbar.jsx";
import Hero from "./component/hero.jsx";
import AboutMe from "./component/aboutMe.jsx";
import Footer from "./component/footer.jsx";



export default function Homepage({ className }) {


    return (
        <div className={className}>
            <Navbar/>
            <Hero/>
            <AboutMe/>
            <Footer />
        </div>
    )
}