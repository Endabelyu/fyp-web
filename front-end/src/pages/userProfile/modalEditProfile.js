import React from 'react';
// import Button from '../../components/layout/button';
import Button from '../../components/layout/Button';
import { VscChromeClose } from 'react-icons/vsc';
import InputContainer from './InputContainer';
const ModalEditProfile = (props) => {
  const { onClick } = props;
  return (
    <React.Fragment>
      <section className="absolute bg-white top-20 right-[20rem] z-[3]  mx-autow-full mx-auto shadow-lg overflow-y-scroll max-h-[440px] lg:w-[720px] ">
        <ul className="flex justify-between font-bold text-xl w-full p-4  bg-white top-0 left-0 shadow-lg sticky ">
          <li>Edit Profile</li>
          <li className="flex text-xl font-bold ">
            <VscChromeClose className="cursor-pointer" onClick={onClick} />
          </li>
        </ul>
        <form className="px-4 mt-16 " action="">
          <div className="mx-auto w-full">
            <input className="text-white" type="file" />
          </div>
          <InputContainer labelName="DisplayName" />
          <InputContainer labelName="Username" />
          <InputContainer labelName="Location" />
          <InputContainer labelName="URL" />

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
