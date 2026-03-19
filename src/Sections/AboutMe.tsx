import me from "../assets/me.png";

const AboutMe = () => {
    return (
        <section
            id="about"
            className="about-me bg-primary flex items-center justify-between px-5 py-10 md:px-20"
        >
            <div className="flex flex-col items-start justify-center flex-4 gap-4">
                <h2 className="text-3xl font-bold text-white">About Me</h2>
                <p className="text-white">
                    I&apos;m George, the founder of G-Stack — a digital
                    development brand focused on turning ideas into complete,
                    scalable solutions.
                </p>
                <p className="text-white">
                    I specialize in building modern websites and full-stack
                    applications that are clean, functional, and built for
                    real-world use.
                </p>
                <p className="text-white">
                    Currently, I&apos;m focused on building high-quality projects and
                    sharing my journey publicly — constantly improving and
                    expanding into more advanced solutions.
                </p>
                <p className="text-white">
                    <strong>From Code to Complete Solutions.</strong>
                </p>
            </div>
            <div className="me flex-1 hidden md:block">
                <img src={me} alt="me" className="translate-y-10" />
            </div>
        </section>
    );
};

export default AboutMe;
