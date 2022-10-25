import React, { useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import InputContainer from './inputContainer';
import Button from '../../components/layout/button';
import axios from 'axios';

const ModalEditProject = (props) => {
  const {onClick, Project, userId } = props;
  const [projectName, setprojectName] = useState('');
  const [projectUrl, setprojectUrl] = useState('');
  const [image, setImage] = useState('');
  const [subImage, setSubImage] = useState('');
  const [info, setInfo] = useState('');

  

  const addNewProject = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", projectName );
    formData.append("url", projectUrl);
    formData.append("image", image);
    formData.append("subImage", subImage);
    try {
      await axios.post(`http://localhost:5000/project/create/${userId}`, formData);
      onClick();
      Project();
    } catch (error) {
      console.log(error.message);
      setInfo(error.response.data.msg);
    }
  };
  return (
    <React.Fragment>
      <div className='w-full flex justify-center'>
        <section className="absolute bg-white top-[10rem] z-[3]  w-[90%] mx-auto shadow-lg h-auto lg:w-[720px] ">
          <ul className="flex justify-between font-bold text-xl w-full p-4  bg-white top-0 left-0 shadow-lg sticky ">
            <li className='text-[14px]'>Create Project</li>
            <li className="flex text-xl font-bold ">
              <VscChromeClose className="cursor-pointer" onClick={onClick} />
            </li>
          </ul>
          <form className="px-4 mt-6" onSubmit={addNewProject}>
            <p className='text-red-500 text-[12px] text-center'>{info}</p>
            <div className='flex flex-wrap mb-4'>
              <InputContainer
                labelName="Project Title"
                placeholder="Project Name"
                value={projectName}
                onChange={(e) => setprojectName(e.target.value)}
                required="required"
              />
              <InputContainer
                labelName="Url"
                placeholder="Url Github"
                value={projectUrl}
                onChange={(e) => setprojectUrl(e.target.value)}
              />
              <div className="ml-4 mt-4 mr-2 lg:w-[46%] w-full">
                <label className='text-[12px] ml-4'>Image</label>
                <input
                    className="border-2 border-blue-300 w-full px-4 py-2 rounded-full text-[11px]"
                    type="file"
                    placeholder=""
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                  />
              </div>
              <div className="lg:ml-2 ml-4 mt-4 mr-2 lg:w-[46%] w-full">
                <label className='text-[12px] ml-4'>Sub Image</label>
                <input
                    className="border-2 border-blue-300 w-full px-4 py-2 rounded-full text-[11px]"
                    type="file"
                    placeholder=""
                    onChange={(e) => setSubImage(e.target.files[0])}
                    required
                  />
              </div>
            </div>
            <div className="sticky bottom-0 p-4 bg-white left-0">
              <Button
                className="w-full rounded-lg p-2 bg-blue-500 text-white font-normal text-[14px]"
                name="Save Project"
                type="submit"
              />
            </div>
          </form>
        </section>
      </div>
      
    </React.Fragment>
  );
};

export default ModalEditProject;
