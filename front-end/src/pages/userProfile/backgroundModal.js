import React from 'react';

const BackgroundModal = (props) => {
  const { onClick, state } = props;
  return (
    <div
      onClick={onClick}
      className={`${
        state ? 'absolute' : 'hidden '
      } cover bg-slate-900/[.6] h-full w-full `}
    ></div>
  );
};

export default BackgroundModal;
