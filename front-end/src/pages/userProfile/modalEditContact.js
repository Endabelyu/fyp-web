import React, { useState, useEffect } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import InputContainer from './inputContainer';
import Button from '../../components/layout/button';
import axios from 'axios';

const ModaleditContact = (props) => {
  const { onClick, userId } = props;
  const [github, setGithub] = useState('');
  const [twitter, setTwitter] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [id, setId] = useState('');

  const getContact = async () => {
    const response = await axios.get(`http://localhost:5000/contact/${userId}`);
    // console.log(response.data);
    setId(response.data.id);
    setGithub(response.data.github);
    setTwitter(response.data.twitter);
    setLinkedin(response.data.linkedin);
  };
  // getContact();

  useEffect(() => {
    getContact();
  }, []);

  const updateContact = async (e) => {
    // e.preventDefault();

    const formData = new FormData();

    formData.append('github', github);
    formData.append('twitter', twitter);
    formData.append('linkedin', linkedin);

    try {
      await axios.patch(`http://localhost:5000/contact/${id}`, formData);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <React.Fragment>
      <section className="absolute bg-white top-[55rem] right-[20rem] z-[3]  mx-autow-full mx-auto shadow-lg overflow-y-scroll max-h-[440px] lg:w-[720px] ">
        <ul className="flex justify-between font-bold text-xl w-full p-4  bg-white top-0 left-0 shadow-lg sticky ">
          <li>Edit Contact</li>
          <li className="flex text-xl font-bold ">
            <VscChromeClose className="cursor-pointer" onClick={onClick} />
          </li>
        </ul>
        <form className="px-4 mt-6 " onSubmit={updateContact}>
          <InputContainer
            labelName="Github"
            placeholder="Input your github link"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />
          <InputContainer
            labelName="LinkedIn"
            placeholder="Input your linkedin link"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
          <InputContainer
            labelName="Twitter"
            placeholder="Input your twitter link"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
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

export default ModaleditContact;
