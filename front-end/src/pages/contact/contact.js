import axios from 'axios'
import React, { useEffect, useState } from 'react';
import moment from 'moment';

const Contact = () => {
    const [messages, setMessages] = useState([]);

    useEffect(()=>{
        getMessage();
    },[]);

    const getMessage = async() => {
        try {
            const messages = await axios.get(`http://127.0.0.1:5000/getMessage`);
            setMessages(messages.data);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='min-h-[44rem] py-20'>
        <div className='mx-20 my-4'>
            <table class="table-auto border-separate border-spacing-2 border border-slate-500 w-full">
                <thead>
                    <tr>
                        <th class="border border-slate-600">Name</th>
                        <th class="border border-slate-600">Email</th>
                        <th class="border border-slate-600">Message</th>
                        <th class="border border-slate-600">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {messages.map((message, index)=>(
                        <tr>
                            <td class="border border-slate-700 px-2">{message.name}</td>
                            <td class="border border-slate-700 px-2">{message.email}</td>
                            <td class="border border-slate-700 px-2">{message.message}</td>
                            <td class="border border-slate-700 px-2">{moment(message.createdAt).format('DD-MM-YYYY HH-MM-SS')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default Contact
