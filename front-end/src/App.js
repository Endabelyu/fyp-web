import Login from './components/pages/Login';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Register from './components/pages/Register';
import Dashboard from './components/Dashboard';
import MainLayouts from './components/layout/main.layout';
import Creators from './components/pages/Creators';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Participate from './components/pages/Participate';

function App() {
  return (
    <>
      <MainLayouts>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/creators" element={<Creators />} />
            <Route exact path="/participate" element={<Participate />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </MainLayouts>
    </>
  );
}

export default App;
