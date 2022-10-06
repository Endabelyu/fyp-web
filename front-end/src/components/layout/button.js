import React from 'react';

const Button = (props) => {
  const { name, className, onClick, type } = props;
  return (
    <React.Fragment>
      <button onClick={onClick} className={className} type={type}>
        {name}
      </button>
    </React.Fragment>
  );
};

export default Button;
