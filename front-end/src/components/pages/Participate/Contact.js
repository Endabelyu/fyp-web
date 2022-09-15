import React from "react";

const Contact = () => {
    return (
        <div className=" bg-blue-400 m-0 p-0 min-h-[100vh]">
            <div className="flex justify-center items-center flex-col">
                    <h1 className="text-center text-blue text-3xl font-bold mt-28 mb-7">Contact Us</h1>

                    <div className="bg-grey w-2/5 p-6 rounded-lg shadow-lg">
                        <form className="mx-auto">
                            <div className="my-3 mx-auto">
                                <input type="text" className="w-full mt-2 p-4 outline-none border-none rounded-lg" placeHolder="Enter your name"/>
                    </div>

                    <div className="my-3 mx-auto">
                                <input type="text" className="w-full mt-2 p-4 outline-none border-none rounded-lg" placeHolder="Enter your email"/>
                    </div>

                    <div className="my-3 mx-auto">
                        <textarea className="w-full h-36 mt-2 p-4 outline-none border-none rounded-lg" placeholder="Type message..."></textarea>
                    </div>

                    <button className="w-full p-3 mt-2 bg-black text-lg text-white rounded-lg outline-none border-none font-bold tracking-wide transition-all hover: bg-blue">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
);
};


export default Contact;