import React from 'react';
import Image from '../../../assets/srcImg/srcImg';
import CardProjectProfile from './cardProjectProfile';
import HeadContainer from './headContainer';
import SkillsCategory from './skillsCategory';
import { BsGithub, BsTwitter, BsDiscord } from 'react-icons/bs';

const UserProfile = () => {
  return (
    <React.Fragment>
      <main className="mt-20">
        <section className="profile  w-[720px] h-auto mx-auto px-6 pt-10 pb-6 ">
          <div className="flex w-full justify-between p-4 ">
            <img
              className="w-36 rounded-full border-4 border-slate-400"
              src={Image.People}
              alt="andy"
            />
            <button className=" w-32 h-10 border-2 border-slate-400 rounded-[25px] mt-10 ">
              Edit Profile
            </button>
          </div>
          <div className="">
            <h1 className="font-bold text-xl">Andy</h1>
            <p className="mb-3 text-slate-500">@Andyhere</p>
            <p className="mb-3 ">I'am newbie web developer</p>
            <ul className="flex gap-x-4">
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
        <section className="userProject w-[720px] h-auto mx-auto px-6 py-10 border-t-2 border-slate-300">
          <HeadContainer title="My Creative Project" />
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
        <section className="userSkill w-[720px] h-auto mx-auto px-6 py-10 border-t-2 border-slate-300 ">
          <HeadContainer title="Tech Stack" />
          <div className="flex justify-start mt-16">
            <div className=" w-2/4">
              <SkillsCategory category="Javascript Library" />
              <SkillsCategory category="Javascript Library" />
            </div>
            <div className=" w-2/4 border-l-2 border-slate-400 px-8">
              <SkillsCategory category="Javascript Library" />
              <SkillsCategory category="Javascript Library" />
            </div>
          </div>
        </section>
        <section className="userContact w-[720px] h-auto mx-auto px-6 py-10 border-t-2 border-slate-300">
          <HeadContainer title="Connect With Me" />
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
