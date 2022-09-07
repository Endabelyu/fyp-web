import React, { useState, useEffect } from 'react';
import Image from '../../../assets/srcImg/srcImg';
import { VscAccount } from 'react-icons/vsc';
import { BiAddToQueue } from 'react-icons/bi';
import { GrGroup } from 'react-icons/gr';
import axios from 'axios';
import CardProject from './cardProject';
import Button from '../../layout/Button';

const Home = () => {
  const { websiteCartoon } = Image;
  const [Images, setImages] = useState([]);

  const req = () => {
    axios({
      method: 'GET',
      url: `https://jsonplaceholder.typicode.com/albums/1/photos?_start=0&_limit=8`,
    })
      .then((result) => {
        const data = result.data;
        setImages(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    req();
  }, []);

  return (
    <React.Fragment>
      <main>
        <section
          className=" flex justify-evenly w-full  bg-white mx-auto mt-10 lg:mt-10 md:mb-5 mb-10"
          id="hero"
        >
          <div className="flex flex-col justify-center ml-10 mt-16 lg:mt-14">
            <h1 className="text-[#5566FD] text-3xl  font-light drop-shadow-4xl mb-2 lg:text-[50px] lg:leading-[50px]">
              Make developers
              <strong className="ml-3 md:drop-shadow-md ">visible</strong>
              <br />
              Around the world
            </h1>
            <p className="text-[#878698] text-sm  mb-4 ml-1 text-left w lg:w-[400px] md:text-md">
              The place for developers showcase their creative project and show
              them to everyone around the world
            </p>
            <Button
              onClick={() => window.open('/login', '_self')}
              className="bg-[#3371F2] p-4 rounded-md w-28 text-sm text-white lg:w-32 "
              name="Get Started"
            />
          </div>
          <img
            src={websiteCartoon}
            alt="Website Creator Cartoon Illustrations"
            className="hidden md:block md:w-1/2 md:mt-10 lg:mt-0"
          />
        </section>
        <section id="purpose" className=" p-14  bg-[#CCD1FE] lg:p-24">
          <h1 className="text-center text-3xl font-bold ">How it works</h1>
          <ul className=" flex flex-col mx-auto mt-12 gap-y-4 md:gap-x-10  md:gap-y-0 md:flex-row lg:gap-x-0 ">
            <li className=" w-[18rem]  h-[18rem] bg-white rounded-lg p-8 md:p-6 md:w-[25rem] lg:p-10 lg:mr-10">
              <VscAccount className="text-3xl text-[#141104] mb-4 md:mb-5" />
              <h2 className="text-left text-2xl  text-[#575555] mb-1 lg:text-3xl lg:mb-3">
                Register
              </h2>
              <p className="text-left text-xl  text-[#6f6f71] md:text-[17px]  lg:text-xl ">
                Join with us, make your creative project and yourself visible
                around the world.
              </p>
            </li>
            <li className="w-[18rem]  h-[18rem] bg-white rounded-lg p-8 md:p-6 md:w-[25rem] lg:p-10 lg:mr-10">
              <BiAddToQueue className="text-3xl text-[#141104] mb-4 md:mb-5" />
              <h2 className="text-left text-2xl  text-[#575555] mb-1 lg:text-3xl lg:mb-3">
                Build
              </h2>
              <p className="text-left text-xl  text-[#6f6f71] md:text-[17px]  lg:text-xl">
                Build your customize profile and add any your creative project
                to show the whole world.
              </p>
            </li>
            <li className="w-[18rem]  h-[18rem] bg-white rounded-lg p-8 md:p-6 md:w-[25rem] lg:p-10 lg:mr-10">
              <GrGroup className="text-3xl text-[#141104] mb-4 md:mb-5" />
              <h2 className="text-left text-2xl  text-[#575555] mb-1 lg:text-3xl lg:mb-3">
                Show
              </h2>
              <p className="text-left text-xl  text-[#6f6f71] md:text-[17px] lg:text-xl">
                Share your profile to anyone, and let them know you are
                professional developers.
              </p>
            </li>
          </ul>
        </section>
        <section className="p-10" id="projects">
          <div>
            <h1 className=" text-xl  text-center mb-16 md:text-4xl">
              Check out this various project
            </h1>
            <div className="flex justify-between flex-wrap md:gap-x-4 lg:gap-x-16 w-3/4 mx-auto">
              {Images.map((data) => {
                const { id, url, title, thumbnailUrl, name } = data;

                return (
                  <CardProject
                    id={id}
                    url={url}
                    title={title}
                    thumbnailUrl={thumbnailUrl}
                    name={name}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;
