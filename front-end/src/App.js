import Login from './components/pages/sign/Login';
import { Routes, Route } from 'react-router-dom';
import Register from './components/pages/sign/Register';
// import Dashboard from './components/Dashboard';
import MainLayouts from './components/layout/main.layout';
import Creators from './components/pages/Creator/Creators';
import About from './components/pages/about/About';
import Home from './components/pages/home/Home';
import Participate from './components/pages/Participate/Participate';
import UserProfile from './components/pages/user-profile/userProfile';
import IsLoginHomePage from './components/pages/isLoginHomePage/isLoginHomePage';
function App() {
  return (
    <>
      <MainLayouts>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/creators" element={<Creators />} />
          <Route exact path="/participate" element={<Participate />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route exact path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route exact path="/home_login" element={<IsLoginHomePage />} />
        </Routes>
      </MainLayouts>
    </>
  );
}

export default App;
