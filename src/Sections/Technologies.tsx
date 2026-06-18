const Technologies = () => {
    return (
        <div className="flex-col gap-10 flex items-start justify-start py-20 md:px-20 px-5" id="technologies">
            <h2 className="text-2xl lg:text-5xl font-bold md:text-4xl text-primary">Technologies</h2>
            <div className="flex flex-col w-full">
                <div className="text-xl lg:text-2xl font-bold md:text-xl text-secondary mb-2 after:content-[''] after:block after:w-full after:h-0.5 after:bg-[#eee] after:rounded-lg">Frontend</div>
                <div className="flex gap-5 text-black flex-wrap">
                    <div className="p-5 bg-background rounded-lg hover:bg-primary transition-all duration-300 cursor-pointer hover:text-accent">React</div>
                    <div className="p-5 bg-background rounded-lg hover:bg-primary transition-all duration-300 cursor-pointer hover:text-accent">Next.js</div>
                    <div className="p-5 bg-background rounded-lg hover:bg-primary transition-all duration-300 cursor-pointer hover:text-accent">TypeScript</div>
                    <div className="p-5 bg-background rounded-lg hover:bg-primary transition-all duration-300 cursor-pointer hover:text-accent">Tailwind CSS</div>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <div className="text-xl lg:text-2xl font-bold md:text-xl text-secondary mb-2 after:content-[''] after:block after:w-full after:h-0.5 after:bg-[#eee] after:rounded-lg">Backend</div>
                <div className="flex gap-5 text-black flex-wrap">
                    <div className="p-5 bg-background rounded-lg hover:bg-primary transition-all duration-300 cursor-pointer hover:text-accent">Node.js</div>
                    <div className="p-5 bg-background rounded-lg hover:bg-primary transition-all duration-300 cursor-pointer hover:text-accent">Express.js</div>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <div className="text-xl lg:text-2xl font-bold md:text-xl text-secondary mb-2 after:content-[''] after:block after:w-full after:h-0.5 after:bg-[#eee] after:rounded-lg">Database</div>
                <div className="flex gap-5 text-black  flex-wrap">
                    <div className="p-5 bg-background rounded-lg hover:bg-primary transition-all duration-300 cursor-pointer hover:text-accent">MongoDB</div>
                    <div className="p-5 bg-background rounded-lg hover:bg-primary transition-all duration-300 cursor-pointer hover:text-accent">SQLite</div>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <div className="text-xl lg:text-2xl font-bold md:text-xl text-secondary mb-2 after:content-[''] after:block after:w-full after:h-0.5 after:bg-[#eee] after:rounded-lg">Desktop Application</div>
                <div className="flex gap-5 text-black flex-wrap">
                    <div className="p-5 bg-background rounded-lg hover:bg-primary transition-all duration-300 cursor-pointer hover:text-accent">Electron.js</div>
                </div>
            </div>
        </div>
    );
};

export default Technologies
