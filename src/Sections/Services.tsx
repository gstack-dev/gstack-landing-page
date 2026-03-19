import { Layers, Monitor, Server } from "lucide-react"

const Services = () => {
    return (
        <section id="services" className="py-20 px-10 bg-background">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-primary text-center mb-10">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-accent transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-2 after:z-10 after:bg-accent after:rounded-b-lg">
                        <Monitor className="text-accent w-16 h-16 mb-4" />
                        <h3 className="text-xl font-bold text-primary mb-4">Frontend Development</h3>
                        <p className="text-primary">Modern, responsive websites with clean UI, smooth interactions, and optimized performance.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-accent transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-2 after:z-10 after:bg-accent after:rounded-b-lg">
                        <Layers className="text-accent w-16 h-16 mb-4" />
                        <h3 className="text-xl font-bold text-primary mb-4">Full-Stack Development</h3>
                        <p className="text-primary">Complete web applications including frontend, backend, database, and admin systems.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-accent transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-2 after:z-10 after:bg-accent after:rounded-b-lg">
                        <Server className="text-accent w-16 h-16 mb-4" />
                        <h3 className="text-xl font-bold text-primary mb-4">Backend Development</h3>
                        <p className="text-primary">Scalable backend systems, APIs, and database architecture for reliable applications.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services