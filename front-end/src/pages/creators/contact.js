import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { BsGithub, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const Contact = (props) => {

    const { userId } = props;
    const [contact, setContact] = useState([]);

    const link = `http://127.0.0.1:5000/contact/${userId}`;

    useEffect(()=>{
        getContact();
    },[]);
    
    const getContact = async() => {
        const response = await axios.get(link);
        setContact(response.data);
    }

    const handleClick = (url) => {
        window.open(url,'_blank')
    }
    
    return (
        <div className="socmed flex justify-between w-full">
            {!contact.twitter ? '' : <BsTwitter className='cursor-pointer' onClick={()=>handleClick(contact.twitter)} />}
            {!contact.instagram ? '' : <BsInstagram className='cursor-pointer' onClick={()=>handleClick(contact.instagram)}/>}
            {!contact.github ? '' : <BsGithub className='cursor-pointer' onClick={()=>handleClick(contact.github)} />}
            {!contact.linkedin ? '' : <BsLinkedin className='cursor-pointer' onClick={()=>handleClick(contact.linkedin)} />}
        </div>
    )
}

export default Contact;
