import { useState } from "react";
import Toaster from "../components/Toaster";
import { useForm, ValidationError } from "@formspree/react";

const ContactMe = () => {
    const [state, handleSubmit, reset] = useForm("xyknowov");
    const [toastData, setToastData] = useState<{ message: string; type: "success" | "error" } | null>(null);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        handleSubmit(e).then(() => {
            if (state.succeeded) {
                setToastData({ message: "Form Submitted Successfully", type: "success" });
                setFormData({ name: "", email: "", message: "" });
                reset();
                setTimeout(() => setToastData(null), 7000);
            }
        }).catch(() => {
            setToastData({ message: "Error submitting form", type: "error" });
            setTimeout(() => setToastData(null), 7000);
        });
    };

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
                    onSubmit={onSubmit}
                    className="flex flex-col items-start justify-center gap-5 w-full"
                >
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
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
                        value={formData.message}
                        onChange={handleChange}
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
            {toastData && (
                <Toaster
                    message={toastData.message}
                    type={toastData.type}
                    show={!!toastData}
                />
            )}
        </section>
    );
};

export default ContactMe;
