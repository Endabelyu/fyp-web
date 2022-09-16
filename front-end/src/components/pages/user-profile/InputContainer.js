import React from 'react';

const InputContainer = (props) => {
  const { labelName } = props;
  return (
    <React.Fragment>
      <div className="mt-2">
        <label className="w-full font-bold" htmlFor="">
          {labelName}
        </label>
        <div className="border-2 border-slate-300/[.5] mt-2">
          <input
            className="w-full b-2 focus:outline-sky-400 mt-2"
            type="text"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default InputContainer;
