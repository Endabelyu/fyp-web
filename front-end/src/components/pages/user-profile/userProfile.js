import React, { useState } from 'react';
import Image from '../../../assets/srcImg/srcImg';
import CardProjectProfile from './cardProjectProfile';
import HeadContainer from './headContainer';
import SkillsCategory from './skillsCategory';
import { BsGithub, BsTwitter, BsDiscord } from 'react-icons/bs';
import ModalEditProfile from './modalEditProfile';

const UserProfile = () => {
  const [modal, setModal] = useState(false);

  const editClicked = () => {
    setModal(!modal);
  };
  return (
    <React.Fragment>
      <main className="mt-20 relative ">
        {modal ? <ModalEditProfile onClick={editClicked} /> : ''}

        <div
          onClick={editClicked}
          className={`${
            modal ? 'absolute' : 'hidden '
          } cover bg-slate-900/[.6] h-full w-full `}
        ></div>
        <section className="profile w-full h-auto mx-auto px-6 pt-10 pb-6 lg:w-[720px] ">
          <div className="flex w-full justify-between p-4 ">
            {/* need form edit profile */}
            <img
              className="w-36 rounded-full border-4 border-slate-400"
              src={Image.People}
              alt="andy"
            />
            <button
              onClick={editClicked}
              className=" w-32 h-10 border-2 border-slate-400 rounded-[25px] mt-10 "
            >
              Edit Profile
            </button>
          </div>
          <div className="">
            <h1 className="font-bold text-xl">Andy</h1>
            <p className="mb-3 text-slate-500">@Andyhere</p>
            <p className="mb-3 ">I'am newbie web developer</p>
            <ul className="flex flex-wrap gap-x-4">
              <li className="text-slate-500">germany</li>
              <li>
                <a className="text-blue-400" href="https://instagram.com/andy">
                  instagram.com/andy
                </a>
              </li>
              <li className="text-slate-500">Joined September 2022</li>
            </ul>
          </div>
        </section>
        <section className="userProject w-full  h-auto mx-auto px-6 py-10 border-t-2 border-slate-300 lg:w-[720px]">
          <HeadContainer onClick={editClicked} title="My Creative Project" />
          <div className="flex flex-wrap gap-x-4 justify-between mt-16">
            <CardProjectProfile
              id="1"
              url={Image.websiteCartoon}
              title="project"
            />
            <CardProjectProfile
              id="1"
              url={Image.websiteCartoon}
              title="project"
            />
            <CardProjectProfile
              id="1"
              url={Image.websiteCartoon}
              title="project"
            />
            <CardProjectProfile
              id="1"
              url={Image.websiteCartoon}
              title="project"
            />
            <CardProjectProfile
              id="1"
              url={Image.websiteCartoon}
              title="project"
            />
            <CardProjectProfile
              id="1"
              url={Image.websiteCartoon}
              title="project"
            />
          </div>
        </section>
        <section className="userSkill w-full h-auto mx-auto px-6 py-10 border-t-2 border-slate-300  lg:w-[720px] ">
          <HeadContainer onClick={editClicked} title="Tech Stack" />
          <div className="flex flex-col  lg:flex-row justify-start mt-16">
            <div className=" w-2/4">
              <SkillsCategory category="Javascript Library" />
              <SkillsCategory category="Javascript Library" />
            </div>
            <div className=" w-2/4 lg:border-l-2 lg:border-slate-400 lg:px-8">
              <SkillsCategory category="Javascript Library" />
              <SkillsCategory category="Javascript Library" />
            </div>
          </div>
        </section>
        <section className="userContact w-full h-auto mx-auto px-6 py-10 border-t-2 border-slate-300 lg:w-[720px]">
          <HeadContainer onClick={editClicked} title="Connect With Me" />
          <div className="flex justify-around gap-x-6 mt-12">
            <a href="/">
              <BsGithub className="text-[50px]" />
            </a>
            <a href="/">
              <BsTwitter className="text-[50px]" />
            </a>
            <a href="/">
              <BsDiscord className="text-[50px]" />
            </a>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default UserProfile;
