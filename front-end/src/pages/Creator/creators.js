import React from 'react';
import Card from './card';
import CreatorsData from './creatorsData';

const Creators = () => {
  const data = CreatorsData;
  // console.log(data);

  return (
    <React.Fragment>
      <div className="mt-32 ">
        <h1 class="title max-w-xl mb-3 lg:mb-10 text-3xl text-center font-bold  mx-auto">
          This is our Incredible
          <span class="creators ml-3 stroke text-white">Creators</span>
        </h1>
        <div className="mx-auto flex gap-y-10 flex-wrap w-[90%] bg-white drop-shadow-xl p-10">
          {data.map((creator) => {
            const { name, image, quote } = creator;

            return <Card name={name} image={image} quote={quote} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Creators;
