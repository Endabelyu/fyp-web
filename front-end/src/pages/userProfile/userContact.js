import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { BsGithub, BsTwitter, BsLinkedin,BsInstagram } from 'react-icons/bs';
import HeadContainer from './headContainer';

const UserContact = (props) => {
    const {editContactClicked, userId} = props;
    const [github, setGithub] = useState('');
    const [instagram, setInstagram] = useState('');
    const [twitter, setTwitter] = useState('');
    const [linkedin, setLinkedin] = useState('');

    useEffect(()=>{
        getContact();
    },[userId]);

    const getContact = async() => {
        try {
            const contact = await axios.get(`http://127.0.0.1:5000/contact/${userId}`);
            setGithub(contact.data.github);
            setInstagram(contact.data.instagram);
            setTwitter(contact.data.twitter);
            setLinkedin(contact.data.linkedin);
        } catch (error) {
            console.log(error);
        }
    }

    const handleClick = (url) => {
        window.open(url, '_blank');
    }

    return (
        <div>
        <section className="userContact w-full h-auto mx-auto px-6 py-10 border-t-2 border-slate-300 lg:w-[720px]">
            <HeadContainer onClick={editContactClicked} title="My Contact" />
            <div className="flex justify-around gap-x-6 mt-12">
                <BsGithub className={`text-[50px] ${!github ? 'hidden' : ''} cursor-pointer`} onClick={()=>handleClick(github)} />
                <BsTwitter className={`text-[50px] ${!twitter ? 'hidden' : ''} cursor-pointer`} onClick={()=>handleClick(twitter)} />
                <BsLinkedin className={`text-[50px] ${!linkedin ? 'hidden' : ''} cursor-pointer`} onClick={()=>handleClick(linkedin)} />
                <BsInstagram className={`text-[50px] ${!instagram ? 'hidden' : ''} cursor-pointer`} onClick={()=>handleClick(instagram)} />
            </div>
            </section>
        </div>
    )
}

export default UserContact;
