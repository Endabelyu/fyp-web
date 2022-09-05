import React from 'react';

export const card = () => {
  return (
    <div class="grid gap-4 grid-cols-2">
      <div class="card basis-1/2 rounded-lg bg-[#EAEAFA] flex flex-wrap shadow md:shadow-lg">
        <div class="card-foto">
          <img
            src="images/people.png"
            alt=""
            // style="border: 3px solid white; border-radius: 50%;"
          />
        </div>
      </div>
    </div>
  );
};
