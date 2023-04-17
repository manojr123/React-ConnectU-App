import { useEffect, useState } from 'react';

import { getPosts } from '../api';
import Home from '../pages/Home';
// import { Loader } from './';
// import App from './App';
import Loader from './Loader';
import Navbar from './Navbar'

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();

      if (response.success) {
        setPosts(response.data.posts);
      }

      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Navbar />
      <h1>App</h1>
      <Home posts={posts} />
    </div>
  );
}

export default App;
