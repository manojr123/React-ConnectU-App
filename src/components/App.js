import { useEffect, useState } from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import { getPosts } from '../api';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Settings from '../pages/Settings';

// import { Loader } from './';
// import App from './App';
import Loader from './Loader';
import Navbar from './Navbar'
import { useAuth } from '../hooks';




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
          <Route  path="/register" element={<Signup />} />
          <Route  path="/settings" element={<Settings />} />

          <Route  path="*" element={<Page404 />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App;
