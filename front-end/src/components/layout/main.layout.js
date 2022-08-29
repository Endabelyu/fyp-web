import React from 'react';
import Navbar from './Navbar';

const MainLayouts = (props) => {
  const { children } = props;

  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
};

export default MainLayouts;
