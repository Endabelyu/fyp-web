import React from 'react';
import Navbar from './navbarContainer';
import Footer from './footer';
const MainLayouts = (props) => {
  const { children } = props;

  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default MainLayouts;
