import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { HiCheckCircle } from "react-icons/hi2";
import { VscChromeClose } from "react-icons/vsc";
import OtpInput from "react-otp-input";
import useForm from "../hooks/useForm";

export default function CtaForm({ show, setShow }) {
    const [details, handleDetails, resetDetails] = useForm({
        name: "",
        email: "",
    });

    const closeModal = () => {
        console.log("closing...");
        setShow(false);
        resetDetails();
    };

    const onFormSubmit = () => {
        console.log("submitting...");
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed z-50 top-0 left-0 w-full h-screen flex items-center justify-center bg-black bg-opacity-60 p-4 pr-6 overflow-auto"
                >
                    <div className="bg-white w-full max-w-sm px-4 py-6 rounded-xl relative my-10">
                        {/* close button */}
                        <button
                            onClick={() => closeModal()}
                            className="absolute text-xl top-0 right-0 transform translate-x-3 -translate-y-3 bg-white rounded-full w-10 h-10 flex items-center justify-center border-2 border-black"
                        >
                            <VscChromeClose />
                        </button>

                        {/* content */}
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                onFormSubmit();
                            }}
                        >
                            <h2 className="font-semibold text-lg">Please enter your details</h2>
                            <hr className="mb-4 mt-3 border-t-[0.05rem] border-[#d7dedd]" />

                            <div className="flex flex-col items-start justify-start mb-5">
                                <p className="text-xs mb-0.5">Name</p>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    required
                                    className="w-full bg-[#f5f5f5] border-[#d1d1d1] rounded-md text-sm placeholder:text-gray-400 text-black"
                                />
                            </div>

                            <div className="flex flex-col items-start justify-start mb-5">
                                <p className="text-xs mb-0.5">Email</p>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    required
                                    className="w-full bg-[#f5f5f5] border-[#d1d1d1] rounded-md text-sm placeholder:text-gray-400 text-black"
                                />
                            </div>

                            <div className="flex flex-col items-start justify-start mb-5">
                                <p className="text-xs mb-0.5">Phone No.</p>
                                <div className="flex items-center justify-start gap-3 w-full">
                                    <p className="bg-[#f5f5f5] border border-[#d1d1d1] rounded-md text-sm placeholder:text-gray-400 text-black py-2 pl-3 pr-4 text-center">
                                        +91
                                    </p>
                                    <input
                                        type="number"
                                        maxLength={10}
                                        minLength={10}
                                        required
                                        placeholder="XXXXXXXXXX"
                                        className="w-full flex-grow bg-[#f5f5f5] border-[#d1d1d1] rounded-md text-sm placeholder:text-gray-400 text-black"
                                    />
                                    <button
                                        type="button"
                                        className="text-black px-3 py-2 border border-transparent bg-capabl_primary rounded-md text-sm whitespace-nowrap hover:scale-95 transition-all duration-200"
                                    >
                                        Sent OTP
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col items-start justify-start mb-3">
                                <p className="text-xs mb-1">Please enter OTP to verify your phone number</p>
                                <div className="w-full flex items-center justify-between">
                                    <OtpInput
                                        value={details?.otp}
                                        onChange={(val) => {
                                            console.log(val);
                                            handleDetails("otp", val);
                                        }}
                                        isInputNum={true}
                                        className="w-full"
                                        inputStyle="react_otp_input"
                                        containerStyle="w-full flex items-center justify-between gap-4"
                                        numInputs={6}
                                        separator={" "}
                                    />
                                </div>
                            </div>

                            <div className="mb-5 flex items-center justify-start gap-1 text-xs text-[#04ca00]">
                                <HiCheckCircle className="text-lg" />
                                <p>OTP Verified Successfully</p>
                            </div>

                            <div className="flex flex-col items-start justify-start mb-5">
                                <p className="text-xs mb-0.5">{`I'm`}</p>
                                <select required className="w-full bg-[#f5f5f5] border-[#d1d1d1] rounded-md text-sm placeholder:text-gray-400 text-black">
                                    <option value="">Choose</option>
                                    {[
                                        { label: "1st Year Student", value: "1st_year_student" },
                                        { label: "2nd Year Student", value: "2nd_year_student" },
                                        { label: "3rd Year Student", value: "3rd_year_student" },
                                        { label: "4th Year Student", value: "4th_year_student" },
                                    ].map(({ label, value }, index) => (
                                        <option key={index} value={value}>
                                            {label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex flex-col items-start justify-start mb-5">
                                <p className="text-xs mb-0.5">Referral Code (If Any)</p>
                                <input
                                    type="text"
                                    placeholder="XXXXXXX"
                                    className="w-full bg-[#f5f5f5] border-[#d1d1d1] rounded-md text-sm placeholder:text-gray-400 text-black"
                                />
                            </div>

                            <button
                                type="submit"
                                className="text-black w-full p-3 font-semibold uppercase border border-transparent bg-capabl_primary rounded-md text-sm whitespace-nowrap hover:scale-[0.98] transition-all duration-200"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
