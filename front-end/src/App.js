import Login from './pages/sign/login';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/sign/register';
// import Dashboard from './components/Dashboard';
import MainLayouts from './components/layout/mainLayout';
import Creators from './pages/Creator/creators';
import About from './pages/about/about';
import Home from './pages/home/home';
import Participate from './pages/participate/participate';
import UserProfile from './pages/userProfile/userProfile';
import IsLoginHomePage from './pages/isLoginHomePage/isLoginHomePage';
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
