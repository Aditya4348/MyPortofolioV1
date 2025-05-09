import Navbar from "./component/Page/navbar.jsx";
import Hero from "./component/Page/hero.jsx";
import AboutMe from "./component/Page/aboutMe.jsx";
import Footer from "./component/Page/footer.jsx";
import Portofolio from "./component/Page/portofolio.jsx";



export default function Homepage({ className }) {   


    return (
        <div className={className}>
            <Navbar/>
            <Hero/>
            <AboutMe/>
            <Portofolio/>
            <Footer />
        </div>
    )
}