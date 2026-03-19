import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "../../public/favicon.jpg";

const Footer = () => {
    return (
        <footer className="bg-[#1E1E1E] text-white">
            <div className="px-10 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
                        <span className="text-xl font-bold">G-Stack</span>
                    </div>
                    <div className="flex items-center gap-5">
                        <a href="https://www.linkedin.com/in/g-stack/" className="hover:text-accent transition-colors duration-300 cursor-pointer"><Linkedin className="w-6 h-6" /></a>
                        <a href="https://www.instagram.com/gstack.dev" className="hover:text-accent transition-colors duration-300 cursor-pointer"><Instagram className="w-6 h-6" /></a>
                        <a href="https://github.com/gstack-dev" className="hover:text-accent transition-colors duration-300 cursor-pointer"><Github className="w-6 h-6" /></a>
                        <a href="https://x.com/gstackdev" className="hover:text-accent transition-colors duration-300 cursor-pointer"><Twitter className="w-6 h-6" /></a>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm">© 2026 G-Stack. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer