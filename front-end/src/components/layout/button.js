import React from 'react';

const Button = (props) => {
  const { name, className, onClick } = props;
  return (
    <React.Fragment>
      <button onClick={onClick} className={className}>
        {name}
      </button>
    </React.Fragment>
  );
};

export default Button;
