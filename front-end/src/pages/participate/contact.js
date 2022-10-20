import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [msg, setMsg] = useState('');

    useEffect(()=>{
        
    },[name, email, message]);

    const submitMessage = async(e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);

        try {
            const submit = await axios.post(`http://127.0.0.1:5000/submitMessage`, formData);
            resetForm();
            setMsg(submit.data.msg);
        } catch (error) {
            console.log(error);
        }
    }

    const resetForm = () => {
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div className="flex justify-center items-center flex-col">
            <h1 className="text-center text-blue text-3xl font-bold mt-28 mb-7">
            Contact Us
            </h1>
            <div className="bg-grey w-2/5 p-6 rounded-lg shadow-lg">
            <div className='flex justify-center'>
                <p className='w-1/2 bg-white text-center rounded-xl text-blue-400'>{msg}</p>
            </div>
            <form className="mx-auto" onSubmit={submitMessage}>
                <div className="my-3 mx-auto">
                <input
                    type="text"
                    className="w-full mt-2 p-4 outline-none border-none rounded-lg"
                    placeHolder="Enter your name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                </div>

                <div className="my-3 mx-auto">
                <input
                    type="text"
                    className="w-full mt-2 p-4 outline-none border-none rounded-lg"
                    placeHolder="Enter your email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                </div>

                <div className="my-3 mx-auto">
                <textarea
                    className="w-full h-36 mt-2 p-4 outline-none border-none rounded-lg"
                    placeholder="Type message..."
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                ></textarea>
                </div>

                <button 
                type='submit'
                className="w-full p-3 mt-2 bg-black text-lg text-white rounded-lg outline-none border-none font-bold tracking-wide transition-all hover: bg-blue">
                Submit
                </button>
            </form>
            </div>
        </div>
    )
}

export default Contact;
