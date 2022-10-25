import React from 'react';

const InputContainer = (props) => {
  const { labelName, placeholder, onChange, value, required} = props;
  return (
    <React.Fragment>
      <div className="mt-2 ml-4 lg:w-[46%] w-[91%]">
          <input
            className="border-2 border-blue-300 w-full px-4 py-3 mt-3 rounded-full text-[11px]"
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
          />
      </div>
    </React.Fragment>
  );
};

export default InputContainer;
