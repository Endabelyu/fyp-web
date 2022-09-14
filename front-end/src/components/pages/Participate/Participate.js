import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../layout/Button';

const Participate = () => {
  return (
    <React.Fragment>
      <main className="mt-20">
        <section className="contribute w-full mx-auto px-6 pt-10 pb-6">
          <h1 className=" text-center font-bold text-3xl tracking-wider mb-5">
            How to Participate
          </h1>
          <p className=" w-3/4 mx-auto text-lg text-slate-500">
            Fyp website is an Open Source project, built and maintained by
            creators and volunteers who dedicate their time and skills to making
            Fyp one of the best portal portfolios for developers on the web. We
            are always working on projects to improve Fyp and are always looking
            for people who want to join our growing team of contributors.
          </p>
          <div className=" mx-auto text-center mt-10 mb-10">
            <h2 className="font-bold text-xl">
              There are two main ways to participate
            </h2>
            <ul className="flex flex-col justify-evenly lg:mt-10  gap-y-4  md:flex-row md:gap-x-10 ">
              <li className="bg-white rounded-lg drop-shadow-lg md:w-2/4 lg:w-2/5 p-8">
                <h3 className="text-xl text-blue-500 font-bold mb-5">
                  Participate to main site
                </h3>
                <p className="mb-5">
                  The site you are on right now is a React Js application. We
                  are constantly expanding and updating the feature to keep it
                  current and ensure it makes developers enjoy it and easier to
                  build their portfolios. Our goal is to create the best portal
                  portfolio website in the world, anyone is welcome to join in
                  and help us in striving for this goal.
                </p>
                <Button
                  className={`  py-3 px-6 rounded-xl bg-blue-500 text-white font-normal`}
                  onClick={() =>
                    window.open(
                      'https://github.com/Endabelyu/fyp-web',
                      '_blank'
                    )
                  }
                  name="Go to GitHub"
                />
              </li>
              <li className="bg-white rounded-lg drop-shadow-lg md:w-2/4 lg:w-2/5 p-8">
                <h3 className="font-bold mb-5 text-blue-500 text-xl">
                  Participate for new feature
                </h3>
                <p className=" mb-10 md:mb-20 lg:mb-16">
                  This project is always open to anyone to participate, but if
                  you didn't have any time to contribute to the project and fix
                  the issues, you can still participate to give your best ideas
                  for the new and useful feature for this website.
                </p>
                <Link to="#contact">
                  <Button
                    onClick={() => {
                      document
                        .querySelector('#contact')
                        .scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`  py-3 px-6 rounded-xl bg-blue-500 text-white font-normal`}
                    name="Contact us"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <section className="Reason w-full mx-auto px-6 pt-10 pb-6 bg-[#CCD1FE] mt-4 text-center">
          <h2 className="text-slate-800 text-2xl font-bold">
            Why you should get involved
          </h2>
          <ul className="flex justify-around">
            <li className="bg-white rounded-lg drop-shadow-lg">
              <h3 className="text-blue-500 font-bold">Flexibility</h3>
              <p>
                You can join on your own time. It's not strict so you can get
                involved when it's convenient for you.
              </p>
            </li>
            <li className="bg-white rounded-lg drop-shadow-lg">
              <h3 className="text-blue-500 font-bold">Impact</h3>
              <p>
                The features you work on or the feature you create will help
                many developers make portfolios or show their projects.
              </p>
            </li>
            <li className="bg-white rounded-lg drop-shadow-lg">
              <h3 className="text-blue-500 font-bold">Experience</h3>
              <p>
                You'll get the chance to work within a team and to work on new
                and interesting features that will expand your capabilities.
              </p>
            </li>
            <li className="bg-white rounded-lg drop-shadow-lg">
              <h3 className="text-blue-500 font-bold">Recognition</h3>
              <p>
                Significant Contributors will be listed on this page and on our
                Github.
              </p>
            </li>
          </ul>
        </section>
        <section id="contact" className="Contact">
          <form action="">
            <input type="text" name="name" />
            <input type="email" name="email" />
            <label>Enter your messages</label>
            <textarea />
            <Button
              className={`py-3 px-6 rounded-xl bg-blue-500 text-white font-normal`}
              name="Send Messages"
            />
          </form>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Participate;
