import { useEffect, useState } from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import { getPosts } from '../api';
import Home from '../pages/Home';
import Login from '../pages/Login';

// import { Loader } from './';
// import App from './App';
import Loader from './Loader';
import Navbar from './Navbar'
import { useAuth } from '../hooks';


const About = () => {
  return <h1>About</h1>;
};

const UserInfo = () => {
  return <h1>User</h1>;
};

const Page404 = () => {
  return <h1>404</h1>;
};


function App() {
  const auth = useAuth();


  if (auth.loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/login" element={<Login />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/userinfo" element={<UserInfo />} />
          <Route  path="*" element={<Page404 />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App;
