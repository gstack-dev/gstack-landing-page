import { useRef, useState, useEffect, useCallback } from "react";
import portfolio1 from "../assets/portfolio1.png";
import portfolio2 from "../assets/portfolio2.png";

const portfolio = [
    {
        title: "Business Website",
        description:
            "A full website with frontend and backend functionality for real business use cases.",
        status: "Coming Soon",
        image: portfolio1,
        link: "#",
        alt: "Screenshot of business website project - professional corporate landing page with hero section, services grid, and contact form"
    },
    {
        title: "Full-Stack Application",
        description:
            "A scalable full-stack application with admin features and database integration.",
        status: "Coming Soon",
        image: portfolio2,
        link: "#",
        alt: "Screenshot of full-stack application - dashboard interface with analytics, user management, and database integration features"
    }
];

function Portfolio() {
    const containerRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<number | null>(null);
    const [index, setIndex] = useState(0);

    const getItemWidth = useCallback(() => {
        if (window.innerWidth < 768) return 296;
        return 360;
    }, []);

    const handleScroll = useCallback(() => {
        const container = containerRef.current;
        if (!container) return;

        const itemWidth = getItemWidth();
        setIndex(prev => {
            const nextIndex = prev + 1;
            if (nextIndex >= portfolio.length) {
                container.scrollTo({ left: 0, behavior: "smooth" });
                return 0;
            } else {
                container.scrollTo({ left: nextIndex * itemWidth, behavior: "smooth" });
                return nextIndex;
            }
        });
    }, [getItemWidth]);

    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            handleScroll();
        }, 5000);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [handleScroll]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const stopAutoScroll = () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };

        const startAutoScroll = () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            intervalRef.current = window.setInterval(() => {
                handleScroll();
            }, 5000);
        };

        container.addEventListener("mouseenter", stopAutoScroll);
        container.addEventListener("mouseleave", startAutoScroll);
        container.addEventListener("touchstart", stopAutoScroll);
        container.addEventListener("touchend", startAutoScroll);

        return () => {
            container.removeEventListener("mouseenter", stopAutoScroll);
            container.removeEventListener("mouseleave", startAutoScroll);
            container.removeEventListener("touchstart", stopAutoScroll);
            container.removeEventListener("touchend", startAutoScroll);
        };
    }, [handleScroll]);

    return (
        <section
            id="portfolio"
            className="flex flex-col items-center justify-center gap-6 py-20 px-5 md:px-10 lg:px-20 bg-background"
        >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center">
                Featured Projects
            </h2>

            <p className="text-center text-primary/70 max-w-2xl">
                A growing collection of projects focused on clean design,
                scalable systems, and real-world solutions.
            </p>

            <div
                ref={containerRef}
                className="flex w-full max-w-6xl gap-4 md:gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
            >
                {portfolio.map((item, ind) => (
                    <div
                        key={ind}
                        className={`shrink-0 snap-start w-70 md:w-85 rounded-2xl shadow-lg p-5 flex flex-col gap-4 transition-all duration-300 ${
                            index === ind
                                ? "bg-primary text-accent"
                                : "bg-white text-primary hover:-translate-y-1"
                        }`}
                    >
                        <img
                            src={item.image}
                            alt={item.alt}
                            className="w-full h-44 md:h-48 object-cover rounded-xl"
                            loading="lazy"
                            width="360"
                            height="192"
                        />

                        <span
                            className={`w-fit text-xs px-3 py-1 rounded-full ${
                                item.status === "Completed"
                                    ? "bg-green-100 text-green-700"
                                    : item.status === "In Progress"
                                      ? "bg-blue-100 text-blue-700"
                                      : "bg-gray-200 text-gray-700"
                            }`}
                        >
                            {item.status}
                        </span>

                        <h3 className="text-xl font-bold">{item.title}</h3>

                        <p
                            className={`text-sm leading-6 ${
                                index === ind
                                    ? "text-accent/90"
                                    : "text-primary/80"
                            }`}
                        >
                            {item.description}
                        </p>

                        <a
                            href={item.status === "Completed" ? item.link : "#"}
                            className={`mt-auto text-sm text-center px-4 py-2 rounded-lg font-medium transition ${
                                item.status === "Completed"
                                    ? "bg-secondary text-white hover:opacity-90"
                                    : "bg-gray-200 text-gray-600 cursor-not-allowed pointer-events-none"
                            }`}
                        >
                            {item.status === "Completed"
                                ? "View Project"
                                : "Coming Soon"}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;
