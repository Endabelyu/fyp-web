import Login from './pages/sign/login';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/sign/register';
// import Dashboard from './components/Dashboard';
import MainLayouts from './components/layout/mainLayout';
import Creators from './pages/creators/creators';
import About from './pages/about/about';
import Home from './pages/home/home';
import Participate from './pages/participate/participate';
import UserProfile from './pages/userProfile/userProfile';
import IsLoginHomePage from './pages/isLoginHomePage/isLoginHomePage';
import Navbar from './components/layout/navbarContainer';

function App() {
  return (
    <>
      <MainLayouts>
        <Routes>
          <Route exact path="/" element={
            <>
            <Navbar />
            <Home />
            </>
          }
          />
          <Route exact path="/about" element={
            <>
            <Navbar />
            <About />
            </>
          } />
          <Route exact path="/creators" element={
          <>
          <Navbar />
          <Creators />
          </>
          } />
          <Route exact path="/participate" element={
            <>
            <Navbar />
            <Participate />
            </>
          } />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route exact path="/login" element={
            <>
            <Navbar />
            <Login />
            </>
            } />
          <Route path="/register" element={
            <>
            <Navbar />
            <Register />
            </>
          } />
          <Route path="/userProfile" element={
            <>
              <Navbar />
              <UserProfile />
            </>
          } />
          <Route exact path="/home_login" element={
            <>
              <Navbar />
              <IsLoginHomePage />
            </>
          } />
        </Routes>
      </MainLayouts>
    </>
  );
}

export default App;
