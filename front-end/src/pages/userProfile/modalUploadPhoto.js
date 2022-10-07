import React, { useEffect, useState } from 'react';
import Button from '../../components/layout/button';
import { VscChromeClose } from 'react-icons/vsc';
import InputContainer from './inputContainer';
import axios from 'axios';

const ModalUploadPhoto = (props) => {
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

  const updatePhoto = async(e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    try {
        await axios.patch(`http://localhost:5000/user_photo/${userId}`, formData );
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
          <li>Edit Photo Profile</li>
          <li className="flex text-xl font-bold ">
            <VscChromeClose className="cursor-pointer" onClick={onClick} />
          </li>
        </ul>
        <div className='w-full flex justify-center'>
          <div className={`text-center mt-4 bg-red-500 w-1/2 rounded-full text-white ${!info ? 'hide' : ''}`}>{info}</div>
        </div>
        
        <form className="px-4" onSubmit={updatePhoto}>
        <div className='flex flex-wrap mb-4'>
          
          <div className="lg:ml-4 ml-4 mt-4 mr-2 w-full">
            <label className='text-[12px] ml-4'>Photo Profile</label>
            <input
                className="border-2 border-blue-300 w-full px-4 py-2 rounded-full text-[11px]"
                type="file"
                placeholder=""
                onChange={(e) => setImage(e.target.files[0])}
              />
          </div>
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

export default ModalUploadPhoto;
