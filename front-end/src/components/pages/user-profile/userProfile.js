import React from 'react';
import Image from '../../../assets/srcImg/srcImg';

const UserProfile = () => {
  return (
    <React.Fragment>
      <main className="mt-20">
        <section className="profile  w-[720px] h-[400px] mx-auto px-6 py-10 border-2 border-black">
          <div className="flex w-full justify-between p-4 border-black border-2">
            <img className="w-28 rounded-full" src={Image.People} alt="andy" />
            <button className=" w-32 h-10 border-2 rounded-[25px] mt-10 ">
              Edit Profile
            </button>
          </div>
          <div className="border-2 border-slate-600 p-2">
            <h1>Andy</h1>
            <p className="mb-3">@Andyhere</p>
            <p className="mb-3">I'am newbie web developer</p>
            <ul className="flex gap-x-4">
              <li>germany</li>
              <li>
                <a className="text-blue-400" href="https://instagram.com/andy">
                  Andy
                </a>
              </li>
              <li>Joined September 2022</li>
            </ul>
          </div>
        </section>
        <section className="userProject w-[720px] h-[600px] mx-auto px-6 py-10 border-2 border-yellow-300"></section>
        <section className="userSkill w-[720px] h-[600px] mx-auto px-6 py-10 border-2 border-cyan-300"></section>
        <section className="userContact w-[720px] h-[600px] mx-auto px-6 py-10 border-2 border-fuchsia-300"></section>
      </main>
    </React.Fragment>
  );
};

export default UserProfile;
