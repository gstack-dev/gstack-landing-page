import { useRef, useState, useEffect } from "react";
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
    },
    {
        title: "Full-Stack Application",
        description:
            "A scalable full-stack application with admin features and database integration.",
        status: "Coming Soon",
        image: portfolio2,
        link: "#",
    },
];

const Item_width = 276;

function Portfolio() {
    let interval: number;

    const [scrollPosition, setScrollPosition] = useState(0);
    const [index, setIndex] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const newScrollPosition = scrollPosition + Item_width + 10;
        setScrollPosition(newScrollPosition);
        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: newScrollPosition,
                behavior: "smooth",
            });
            setIndex(index + 1);
        }
    };

    containerRef.current?.addEventListener("mouseenter", () => {
        clearInterval(interval);
    });
    containerRef.current?.addEventListener("mouseleave", () => {
        interval = setInterval(() => {
            handleScroll();
        }, 5000);
    });

    useEffect(() => {
        let interval = setInterval(() => {
            handleScroll();
        }, 5000);

        if (index === portfolio.length) {
            setScrollPosition(0);
            setIndex(0);
        }
        return () => clearInterval(interval);
    }, [scrollPosition]);

    return (
        <div
            className="flex-col gap-10 flex items-center justify-center py-20 md:px-20 px-5 bg-background"
            id="portfolio"
        >
            <h2 className="text-2xl lg:text-5xl font-bold md:text-4xl text-primary">
                Portfolio
            </h2>
            <div
                ref={containerRef}
                className="flex gap-10 text-black max-w-4xl overflow-x-scroll scroll-smooth scrollbar-hide"
            >
                {portfolio.map((item, ind) => (
                    <div
                        key={ind}
                        className={`p-5 rounded-lg hover:bg-primary transition-all duration-300 cursor-pointer hover:text-accent flex flex-col gap-4 shadow-lg min-w-68 ${index == ind ? "bg-primary text-accent" : "bg-white text-primary"}`}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className={`w-full h-48 object-cover rounded-lg hover:scale-105 transition-all duration-300 ${index == ind ? "scale-105" : "scale-100"}`}
                        />
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-sm">{item.description}</p>
                        <p className="text-sm">{item.status}</p>
                        <a
                            href={item.status === "Completed" ? item.link : "#"}
                            className={`text-sm ${item.status === "Completed" ? "bg-secondary" : "bg-[#eee]"} text-center text-black px-2 py-1 rounded-lg`}
                        >
                            {item.status === "Completed"
                                ? "View"
                                : "Coming soon"}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
