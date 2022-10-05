import React from 'react';
import Navbar from './navbarContainer';
import Footer from './footer';
const MainLayouts = (props) => {
  const { children } = props;

  return (
    <React.Fragment>
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default MainLayouts;
