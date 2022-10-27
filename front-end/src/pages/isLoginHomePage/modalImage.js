import React, {useState, useEffect} from 'react'
import InputContainer from '../userProfile/inputContainer';
import { VscChromeClose } from 'react-icons/vsc';
import Button from '../../components/layout/button';
import axios from 'axios';

const ModalImage = (props) => {
    const { block, onClick, id, refresh } = props;
    const [info, setInfo] = useState(false);
    const [image, setImage] = useState('');
    const [msg, setMsg] = useState('');

    useEffect(()=>{

    },[msg, image]);

    const submitImage = async(e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('file', image);
        try {
            await axios.patch(`http://127.0.0.1:5000/project/image_programe/${id}`, formData);
            setMsg('');
            onClick();
            refresh();
        } catch (error) {
            setMsg(error.response.data.msg);
        }
    }

    return (
        <React.Fragment>
        <div className={`${block ? '' : 'hidden'} flex justify-center`}>
        <section className="absolute bg-white top-[5rem] z-[3] w-full mx-auto shadow-lg overflow-y-scroll h-auto w-[90%] lg:w-[720px] ">
            <ul className="flex justify-between font-bold text-xl w-full p-4  bg-white top-0 left-0 shadow-lg sticky ">
            <li>Upload Programe Image</li>
            <li className="flex text-xl font-bold ">
                <VscChromeClose className="cursor-pointer" onClick={onClick}/>
            </li>
            </ul>
            <div className='w-full flex justify-center'>
            <div className={`text-center mt-4 bg-red-500 w-1/2 rounded-full text-white`}>{info}</div>
            </div>
            <div className='text-sm flex justify-center'>
                {!msg ? '' : 
                <p className='bg-red-500 px-4 rounded-xl text-white'>{msg}</p>
                }
            </div>
            <form className="px-4" onSubmit={submitImage}>
            <div className='flex flex-wrap my-4 mx-4'>
                <input
                    className="border-2 border-blue-300 w-full px-4 py-2 rounded-full text-[11px]"
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
            </div>
            <div className="sticky bottom-0 p-4 bg-white left-0">
                <Button
                    className="w-full rounded-lg p-2 bg-blue-500 text-white font-normal text-[14px]"
                    name="Save"
                    type="submit"
                />
            </div>
            </form>
        </section>
        </div>
        
        </React.Fragment>
    )
}

export default ModalImage;
