import React, { useEffect, useState } from 'react';
import Button from '../../components/layout/button';
import { VscChromeClose } from 'react-icons/vsc';
import InputContainer from './inputContainer';
import axios from 'axios';

const ModalEditProfile = (props) => {
  const { onClick, userId, refresh } = props;
  const [user, setUser] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');
  const [info, setInfo] = useState('');


  useEffect(()=>{
    getUser();
  },[]);

  const getUser = async() => {
    try {
      const user = await axios.get(`http://localhost:5000/user/${userId}`);
      console.log(user);
      const data = user.data;
      setName(data.name);
      setEmail(data.email);
      setBio(data.bio);
      setLocation(data.location);
      setImage(data.image);
    } catch (error) {
      console.log(error);
    }
  }

  const updateUser = async(e) => {
    // e.preventDefault();

    const formData = new FormData();
    
    formData.append("name", name);
    formData.append("email", email);
    formData.append("bio", bio);
    formData.append("location", location);

    try {
        await axios.patch(`http://localhost:5000/user_update/${userId}`, formData );
        onClick();
        refresh();
    } catch (error) {
      console.log(error.message);
      setInfo(error.response.data.msg);
    }
  }


  return (
    <React.Fragment>
      <div className='w-full flex justify-center'>
      <section className="absolute bg-white top-[5rem] z-[3] w-full mx-auto shadow-lg overflow-y-scroll h-auto lg:w-[720px] ">
        <ul className="flex justify-between font-bold text-xl w-full p-4  bg-white top-0 left-0 shadow-lg sticky ">
          <li>Edit Profile</li>
          <li className="flex text-xl font-bold ">
            <VscChromeClose className="cursor-pointer" onClick={onClick} />
          </li>
        </ul>
        <div className='w-full flex justify-center'>
          <div className={`text-center mt-4 bg-red-500 w-1/2 rounded-full text-white ${!info ? 'hide' : ''}`}>{info}</div>
        </div>
        
        <form className="px-4" onSubmit={updateUser}>
        <div className='flex flex-wrap mb-4'>
          <InputContainer
            labelName="Name"
            placeholder="input your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputContainer
            labelName="Email"
            placeholder="input your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputContainer
            labelName="Bio"
            placeholder="input your bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <InputContainer
            labelName="Location"
            placeholder="input your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
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
  );
};

export default ModalEditProfile;
