import Hero from "./Sections/Hero";
import Footer from "./Sections/Footer";
import ContactMe from "./Sections/ContactMe";

function App() {
    return (
        <>
            <div className="text-white font-[poppins]">
                <Hero />
                <ContactMe />
                <Footer />
            </div>
        </>
    );
}

export default App;
