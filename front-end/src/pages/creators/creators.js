import React from 'react';
import Card from './card';
import CreatorsData from './creatorsData';

const Creators = () => {
  const data = CreatorsData;
  // console.log(data);

  return (
    <React.Fragment>
      <div className="mt-32 min-h-[36rem]">
        <h1 class="title max-w-xl mb-3 lg:mb-10 text-3xl text-center font-bold  mx-auto">
          This is our Incredible
          <span class="creators ml-3 stroke text-white">Creators</span>
        </h1>
        <div className='flex justify-center'>
          <Card />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Creators;
