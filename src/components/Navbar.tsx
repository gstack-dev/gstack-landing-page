import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 z-50">
            <div className="logo">
                <img src={logo} alt="logo" className="w-40" />
            </div>
            <div className="links">
                <ul className="gap-4 hidden md:flex">
                    <li>
                        <a
                            href="#"
                            className="hover:text-accent transition-colors duration-300 font-medium text-xl"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="hover:text-accent transition-colors duration-300 font-medium text-xl"
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="hover:text-accent transition-colors duration-300 font-medium text-xl"
                        >
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="hover:text-accent transition-colors duration-300 font-medium text-xl"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="hover:text-accent transition-colors duration-300 font-medium text-xl"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
                <div className="md:hidden flex items-center justify-center">
                    <button
                        className="text-white text-2xl cursor-pointer"
                        onClick={() => {
                            setIsMenuOpen(true);
                        }}
                    >
                        <Menu />
                    </button>
                    <div className={`fixed top-0 left-0 w-full h-screen bg-primary flex flex-col items-center justify-center gap-4 z-50 transition-all duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                        <button
                            className="text-white text-2xl cursor-pointer absolute top-4 right-4"
                            onClick={() => {
                                setIsMenuOpen(false);
                            }}
                        >
                            <X />
                        </button>
                        <ul className="flex flex-col gap-4  px-7 py-3.5 text-lg">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-accent transition-colors duration-300 font-medium text-xl"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-accent transition-colors duration-300 font-medium text-xl"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-accent transition-colors duration-300 font-medium text-xl"
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-accent transition-colors duration-300 font-medium text-xl"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-accent transition-colors duration-300 font-medium text-xl"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
