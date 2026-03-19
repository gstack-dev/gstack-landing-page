import Hero from "./Sections/Hero";
import Footer from "./Sections/Footer";
import ContactMe from "./Sections/ContactMe";
import AboutMe from "./Sections/AboutMe";
import Services from "./Sections/Services";
import Technologies from "./Sections/Technologies";

function App() {
    return (
        <>
            <div className="text-white font-[poppins]">
                <Hero />
                <Services />
                <Technologies />
                <AboutMe />
                <ContactMe />
                <Footer />
            </div>
        </>
    );
}

export default App;
