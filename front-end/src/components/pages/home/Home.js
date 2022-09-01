import React from 'react';
import Image from '../../../assets/srcImg/srcImg';
import { VscAccount } from 'react-icons/vsc';
import { BiAddToQueue } from 'react-icons/bi';
import { GrGroup } from 'react-icons/gr';
const Home = () => {
  const { websiteCartoon } = Image;
  return (
    <div>
      <main>
        <section
          className=" flex justify-evenly w-full  bg-white mx-auto"
          id="hero"
        >
          <div className="flex flex-col justify-center ml-[-3rem] mt-14">
            <h1 className="text-[#5566FD] text-[62px] font-light drop-shadow-4xl mb-2">
              Make developers
              <span className="font-bold drop-shadow-md ml-3">visible</span>
              <br />
              Around the world
            </h1>
            <p className="text-[#878698] text-md mb-4 ml-1 text-left">
              The place for developers showcase their creative project and
              <br />
              show them to everyone around the world
            </p>
            <button
              onClick={() => window.open('/login', '_self')}
              className="bg-[#3371F2] p-4 rounded-md w-32 text-sm text-white"
            >
              Get Started
            </button>
          </div>
          <img
            src={websiteCartoon}
            alt="Website Creator Cartoon Illustrations"
            className="hidden md:block"
          />
        </section>
        <section id="purpose" className="p-24 bg-[#CCD1FE]">
          <h1 className="text-center text-3xl font-bold ">How it works</h1>
          <ul className="flex justify-around mt-20 ">
            <li className="w-[25rem] h-[18rem] bg-white rounded-lg p-10">
              <VscAccount className="text-3xl text-[#141104] mb-5" />
              <h2 className="text-left text-3xl text-[#575555] mb-3">
                Register
              </h2>
              <p className="text-left text-xl text-[#6f6f71] ">
                Join with us, make your creative project and yourself visible
                around the world.
              </p>
            </li>
            <li className="w-[25rem] h-[18rem] bg-white rounded-lg p-10">
              <BiAddToQueue className="text-3xl text-[#141104] mb-5" />
              <h2 className="text-left text-3xl text-[#575555] mb-3">Build</h2>
              <p className="text-left text-xl text-[#6f6f71]">
                Build your customize profile and add any your creative project
                to show the whole world.
              </p>
            </li>
            <li className="w-[25rem] h-[18rem] bg-white rounded-lg p-10">
              <GrGroup className="text-3xl text-[#141104] mb-5" />
              <h2 className="text-left text-3xl text-[#575555] mb-3">Show</h2>
              <p className="text-left text-xl text-[#6f6f71]">
                Share your profile to anyone, and let them know you are
                professional developers.
              </p>
            </li>
          </ul>
        </section>
        <section className="p-10" id="projects">
          <div>
            <h1 className="text-4xl text-center">
              Various project from developer
            </h1>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
