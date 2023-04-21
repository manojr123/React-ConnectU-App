import { useEffect } from 'react';
import {BrowserRouter as Router,Routes, Route, useNavigate} from 'react-router-dom'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Settings from '../pages/Settings';
import UserProfile from '../pages/UserProfile';
import Loader from './Loader';
import Navbar from './Navbar'
import { useAuth } from '../hooks';


function ProtectedRoute(props) {
  const auth = useAuth();
  const { Component } = props;
  const Navigate = useNavigate();
  useEffect(() => {
    if (!auth.user) {
      Navigate('/login');
    }
  });
  return <Component />;
}

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
          <Route
            path="/settings"
            element={<ProtectedRoute Component={Settings} />}
          ></Route>

          <Route
            path="/user/:userId"
            element={<ProtectedRoute Component={UserProfile} />}
          ></Route>


          <Route  path="*" element={<Page404 />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App;
