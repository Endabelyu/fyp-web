import React, { useState } from 'react';
import Button from '../../components/layout/button';
import { VscChromeClose } from 'react-icons/vsc';
import InputContainer from './inputContainer';
import axios from 'axios';
const ModalEditProfile = (props) => {
  const { onClick } = props;

  const [DisplayName, setDisplayName] = useState('');
  const [UserName, setUserName] = useState('');
  const [Bio, setBio] = useState('');
  const [Location, setLocation] = useState('');
  const [Url, setUrl] = useState('');

  const updateUserProfile = async (e) => {
    e.preventDefault();
    try {
      await axios.patch('http://localhost:5000/users', {
        name: DisplayName,
        username: UserName,
        bio: Bio,
        location: Location,
        url: Url,
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.msg);
      }
    }
  };

  return (
    <React.Fragment>
      <section className="absolute bg-white top-20 right-[20rem] z-[3]  mx-autow-full mx-auto shadow-lg overflow-y-scroll max-h-[440px] lg:w-[720px] ">
        <ul className="flex justify-between font-bold text-xl w-full p-4  bg-white top-0 left-0 shadow-lg sticky ">
          <li>Edit Profile</li>
          <li className="flex text-xl font-bold ">
            <VscChromeClose className="cursor-pointer" onClick={onClick} />
          </li>
        </ul>
        <form className="px-4 mt-16 " onSubmit={updateUserProfile}>
          <div className="mx-auto w-full">
            <input className="text-white" type="file" />
          </div>
          <InputContainer
            labelName="DisplayName"
            placeholder="input your displayname"
            value={DisplayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <InputContainer
            labelName="Username"
            placeholder="input username"
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <InputContainer
            labelName="Bio"
            placeholder="fill your bio"
            value={Bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <InputContainer
            labelName="Location"
            placeholder="input your location"
            value={Location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <InputContainer
            labelName="URL"
            placeholder="input your link"
            value={Url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <div className="sticky bottom-0 p-4 bg-white left-0">
            <Button
              className="w-full rounded-lg p-2   bg-blue-500 text-white font-normal"
              name="Save"
            />
          </div>
        </form>
      </section>
    </React.Fragment>
  );
};

export default ModalEditProfile;
