import React, { useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import InputContainer from './inputContainer';
import Button from '../../components/layout/button';
import axios from 'axios';

const ModalEditProject = (props) => {
  const { onClick } = props;
  const [projectName, setprojectName] = useState('');
  const [projectUrl, setprojectUrl] = useState('');

  const addNewProject = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/create/:id', {});
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.msg);
      }
    }
  };
  return (
    <React.Fragment>
      <section className="absolute bg-white top-[30rem] right-[20rem] z-[3]  mx-autow-full mx-auto shadow-lg overflow-y-scroll max-h-[440px] lg:w-[720px] ">
        <ul className="flex justify-between font-bold text-xl w-full p-4  bg-white top-0 left-0 shadow-lg sticky ">
          <li>Edit Project</li>
          <li className="flex text-xl font-bold ">
            <VscChromeClose className="cursor-pointer" onClick={onClick} />
          </li>
        </ul>
        <form className="px-4 mt-6 " onSubmit={addNewProject}>
          <InputContainer
            labelName="Project Title"
            placeholder="input your project title"
            value={projectName}
            onChange={(e) => setprojectName(e.target.value)}
          />
          <InputContainer
            labelName="Url"
            placeholder="input your project link"
            value={projectUrl}
            onChange={(e) => setprojectUrl(e.target.value)}
          />
          <div className="mx-auto w-full my-6">
            <label className="mr-4">Choose your Project</label>
            <input className="text-white" type="file" />
          </div>

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

export default ModalEditProject;
