import Navbar from "../components/Navbar";

const Hero = () => {
    return (
        <header>
            <Navbar />
            <div className="hero h-screen flex items-center justify-center bg-linear-to-r from-primary to-secondary w-full">
                <div className="hero-content flex flex-col items-center justify-center gap-4">
                    <h1 className="text-2xl lg:text-5xl font-bold text-center md:text-4xl">From Code To Complete Solutions</h1>
                    <p className="text-sm lg:text-xl text-gray-300 text-center md:text-lg">
                        Modern websites, full-stack applications, and scalable
                        digital solutions.
                    </p>
                    <button className="bg-accent text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-accent transition-colors duration-300 font-medium text-xl cursor-pointer mt-4">Start Your Project</button>
                </div>
            </div>
        </header>
    );
};

export default Hero;
