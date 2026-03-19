import { useState } from "react";
import Toaster from "../components/Toaster";

const ContactMe = () => {
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmit = async (event: any) => {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData(event.target);
        formData.append("access_key", "6010b986-3d98-4ad8-bb9d-aa8cce13eb42");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        if (data.success) {
            setResult("Form Submitted Successfully");
            setLoading(false);
            event.target.reset();
        } else {
            setResult("Error");
            setLoading(false);
        }
        setTimeout(() => {
            setResult("");
        }, 6000);
    };
    return (
        <section id="contact" className="contact-me bg-secondary h-[50vh] flex items-center justify-center px-2">
            <div className="flex flex-col items-start justify-center bg-white p-10 rounded-xl gap-3 w-full max-w-md mx-auto">
                <h2 className="text-3xl font-bold text-[#222]">Let's Build your idea</h2>
                <form
                    onSubmit={onSubmit}
                    className="flex flex-col items-start justify-center gap-5 w-full"
                >
                    <input
                        type="text"
                        placeholder="Name"
                        className="border-0 p-2 rounded-lg bg-background text-[#222] w-full shadow-md focus:outline-none "
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="border-0 p-2 rounded-lg bg-background text-[#222] w-full shadow-md focus:outline-none "
                    />
                    <textarea
                        placeholder="Message"
                        className="border-0 w-full p-2 rounded-lg bg-background text-[#222] shadow-md focus:outline-none "
                    ></textarea>
                    <button
                        type="submit"
                        className={`bg-accent hover:bg-secondary transition-all duration-300 cursor-pointer w-full text-white p-2 rounded-lg shadow-md ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </div>
            {result ? <Toaster message={result} type="success" /> : null}
        </section>
    );
};

export default ContactMe;
