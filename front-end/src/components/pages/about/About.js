import React from 'react';
import { BsGithub } from 'react-icons/bs';
import Button from '../../layout/Button';

const About = () => {
  return (
    <React.Fragment>
      <main className="mt-20">
        <div className="w-full bg-[#CCD1FE]" >
          <div className='w-full text-center'>
            <div className='w-full py-20'>
              <div className='text-6xl text-white'>
                <div className='p-5'>This  is our </div>
                <div className='p-5'>Incredible Creators</div>
              </div>
              <div className='text-2xl text-blue-500 mt-8'>Fyp is website portal portofolio  and portofolio builder for all developer <br /> around the world</div>
            </div>
            <button className={`py-5 px-8 rounded-xl bg-blue-500 text-white font-normal mb-72`}>Get Start</button>
          </div>
        </div>
        {/* <section className=" about w-full mx-auto px-6 pt-10 pb-6 ">
          <h1 className=" text-center font-bold text-3xl tracking-wider mb-5">
            About FYP
          </h1>
          <p className=" w-3/4 mx-auto text-lg text-slate-500">
            Fyp is an abbreviation for "For your portfolio". Fyp Website is one
            of those creator's ideas, based on restlessness look other websites,
            especially dribble. Dribble is a website for designers in the whole
            world, all designer can share all their projects. That's the
            important reason why this website was built, we hope to provide a
            website like a dribble for all developers in the whole world, which
            can make developers easier to make portfolios or share their
            creative projects for other developers or their clients.
          </p>
        </section> */}
        <section className="overview w-full mx-auto px-6 pt-10 pb-6 bg-white mt-6">
          <h1 className="text-4xl text-center font-bold my-32">
            STATIC FYP WEB PAGE
          </h1>
          <ul className="flex flex-col gap-y-4 justify-evenly mt-10 text-2xl  text-slate-600 md:flex-row md:gap-x-4 lg:gap-x-0 md:gap-y-0 ">
            <li className="bg-white rounded-lg text-center px-16 lg:w-[300px] py-10 drop-shadow-md">
              <p className="font-bold">131</p>
              <p>Developers</p>
            </li>
            <li className="bg-white rounded-lg text-center px-16 lg:w-[300px] py-10 drop-shadow-md">
              <p className="font-bold">260</p>
              <p>projects</p>
            </li>
            <li className="bg-white rounded-lg text-center px-16 lg:w-[300px] py-10 drop-shadow-md">
              <p className="  font-bold">2022</p>
              <p>Founded</p>
            </li>
          </ul>

          <div className='w-full mt-72'>
            <div class="flex flex-row text-center my-4 mx-20">
              <div class="basis-1/3">
                <button className='btn bg-blue-400 hover:bg-blue-300 px-8 py-2 text-white rounded-full'>creator</button>
              </div>
              <div class="basis-1/3">
                <button className='btn bg-blue-400 hover:bg-blue-300 px-8 py-2 text-white rounded-full'>About</button>
              </div>
              <div class="basis-1/3">
                <button className='btn bg-blue-400 hover:bg-blue-300 px-8 py-2 text-white rounded-full'>Participate</button>
              </div>
            </div>
            <hr />
          </div>
          
          <div className=" max-w-full lg:w-3/4 mx-auto mt-14 mb-8 bg-white rounded-lg p-10 ">
            <span className="flex gap-x-4 text-3xl mb-10">
              <BsGithub />
              <h2 className="font-bold">Open Source</h2>
            </span>
            <p className="text-slate-600 text-lg">
              This website are completely open source. That means anyone can
              work on new features or fix existing bugs on the website. This
              also extends to the feature itself, anyone can work on a new
              feature, add new resources and improve existing features. Fyp
              website would not be possible without the hard work of creators
              and all contributors from all across the world. If you're
              interested in helping use make Fyp bigger and better please join
              with us
            </p>
          </div>
        </section>
        <section className=" w-full mx-auto px-6 pt-10 pb-6 text-center my-10">
          <p className="text-2xl mb-8 text-slate-500">
            Help <strong>Fyp</strong> stay current and meaningful to all
            developers, please participate!
          </p>
          <Button
            className={`  py-5 px-8 rounded-xl bg-blue-500 text-white font-normal`}
            onClick={() => window.open('/participate', '_self')}
            name="Participate"
          />
        </section>
      </main>
    </React.Fragment>
  );
};

export default About;
