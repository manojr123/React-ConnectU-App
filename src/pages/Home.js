import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getPosts } from '../api';
import { Link } from 'react-router-dom';

import styles from '../styles/home.module.css';
import Loader from '../components/Loader';
import Comment from '../components/Comment';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState([]);

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
    <div className={styles.postsList}>
      {posts.map((post) => (
        <div className={styles.postWrapper} key={`post-${post._id}`}>
          <div className={styles.postHeader}>
            <div className={styles.postAvatar}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="user-pic"
              />
              <div>
              <Link
                  to={{
                    pathname: `/user/${post.user._id}`,
                    state: {
                      user: post.user,
                    },
                  }}
                  className={styles.postAuthor}
                >
                  {post.user.name}
              </Link>
                <span className={styles.postTime}>a minute ago</span>
              </div>
            </div>
            <div className={styles.postContent}>{post.content}</div>

            <div className={styles.postActions}>
              <div className={styles.postLike}>
              <i class="fa-regular fa-heart"></i>
                <span>5</span>
              </div>

              <div className={styles.postCommentsIcon}>
              <i class="fa-regular fa-comment"></i>
              <span>2</span>
              </div>
            </div>
            <div className={styles.postCommentBox}>
              <input placeholder="Start typing a comment" />
            </div>

            <div className={styles.postCommentsList}>
              {post.comments.map((comment) => (
                <Comment comment={comment} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Home.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Home;
