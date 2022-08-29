import React from 'react';

const Home = () => {
  return (
    <div>
      <main>
        <section class="p-12 bg-white mx-auto" id="hero">
          <div class="w-[700px] mx-auto flex justify-center flex-col">
            <h1 class="text-[#3371F2] text-4xl text-center mx-auto drop-shadow-xl mb-4">
              Creative Design and <br />
              Developtment for your product
            </h1>
            {/* <!-- <p class="text-[#3371F2] text-sm mb-4 text-center">
            Fyp is website portal portofolio and portofolio builder for all
            developer <br />
            around the world
          </p> --> */}
            <button class="bg-[#3371F2] p-4 rounded-md mx-auto text-sm text-white">
              Get Started
            </button>
          </div>
        </section>
        <section id="purpose"></section>
        <section id="statistics"></section>
      </main>
    </div>
  );
};

export default Home;
