import { useEffect, useState } from "react";
import Toaster from "../components/Toaster";
import { useForm, ValidationError } from "@formspree/react";

const ContactMe = () => {
    const [state, handleSubmit, reset] = useForm("xyknowov");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    useEffect(() => {
        if (state.succeeded || state.errors) {
            setIsSubmitted(true);
            setName("");
            setEmail("");
            setMessage("");
        }
        setTimeout(() => {
            setIsSubmitted(false);
            reset();
        }, 7000);
    }, [state.succeeded, state.errors]);

    return (
        <section
            id="contact"
            className="contact-me bg-secondary flex items-center justify-center px-2 py-10"
        >
            <div className="flex flex-col items-start justify-center bg-white p-10 rounded-xl gap-3 w-full max-w-md mx-auto">
                <h2 className="text-3xl font-bold text-[#222]">
                    Let's Build your idea
                </h2>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-start justify-center gap-5 w-full"
                >
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        className="border-0 p-2 rounded-lg bg-background text-[#222] w-full shadow-md focus:outline-none "
                    />
                    <ValidationError
                        prefix="Name"
                        field="name"
                        className="text-red-500"
                        errors={state.errors}
                    />
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-0 p-2 rounded-lg bg-background text-[#222] w-full shadow-md focus:outline-none "
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        className="text-red-500"
                        errors={state.errors}
                    />
                    <textarea
                        placeholder="Message"
                        className="border-0 w-full p-2 rounded-lg bg-background text-[#222] shadow-md focus:outline-none "
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <ValidationError
                        prefix="Message"
                        field="message"
                        className="text-red-500"
                        errors={state.errors}
                    />

                    <button
                        type="submit"
                        className={`bg-accent hover:bg-secondary transition-all duration-300 cursor-pointer w-full text-white p-2 rounded-lg shadow-md ${state.submitting ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={state.submitting}
                    >
                        {state.submitting ? "Sending..." : "Send"}
                    </button>
                </form>
            </div>
            <Toaster
                message={
                    state.succeeded
                        ? "Form Submitted Successfully"
                        : "Error"
                }
                type={state.succeeded ? "success" : "error"}
                show={isSubmitted}
            />
        </section>
    );
};

export default ContactMe;
