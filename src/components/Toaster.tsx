import { Check, X } from "lucide-react";

const Toaster = ({ message, type }: { message: string; type: string }) => {
    return (
        <div className={`alert-box ${message ? "show" : ""}`}>
            <div className={`alert ${type === "success" ? "success" : "error"}`}>
                {type === "success" ? (
                    <Check className={`text-[35px] mr-2 text-[#0abf30]`} />
                ) : (
                    <X className={`text-[35px] mr-2 text-[#e9463f]`} />
                )}
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Toaster;
