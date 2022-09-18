import React from 'react';

const Reason = () => {
  return (
    <React.Fragment>
      <ul
        className="flex justify-around flex-col gap-y-4 mt-6 md:flex-row
        md:gap-x-4"
      >
        <li className="bg-white rounded-lg drop-shadow-lg p-4">
          <h3 className="text-blue-500 font-bold">Flexibility</h3>
          <p>
            You can join on your own time. It's not strict so you can get
            involved when it's convenient for you.
          </p>
        </li>
        <li className="bg-white rounded-lg drop-shadow-lg p-4">
          <h3 className="text-blue-500 font-bold">Impact</h3>
          <p>
            The features you work on or the feature you create will help many
            developers make portfolios or show their projects.
          </p>
        </li>
        <li className="bg-white rounded-lg drop-shadow-lg p-4">
          <h3 className="text-blue-500 font-bold">Experience</h3>
          <p>
            You'll get the chance to work within a team and to work on new and
            interesting features that will expand your capabilities.
          </p>
        </li>
        <li className="bg-white rounded-lg drop-shadow-lg p-4">
          <h3 className="text-blue-500 font-bold">Recognition</h3>
          <p>
            Significant Contributors will be listed on this page and on our
            Github.
          </p>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Reason;
