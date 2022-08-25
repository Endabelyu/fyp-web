import Login from "./components/Login";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import './App.css';

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Login/> } />
          <Route path="/register" element={ <Register/> } />
          <Route path="/dashboard" element={ 
            <>
              <Navbar/>
              <Dashboard/> 
            </>
          } />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
