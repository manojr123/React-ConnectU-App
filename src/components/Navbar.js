import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.leftDiv}>
        <Link to="/">
          <img
            alt=""
            src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
          />
        </Link>
      </div>

      <div className={styles.rightNav}>
        <div className={styles.user}>
          <Link to="/">
            <img
              src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
              alt=""
              className={styles.userDp}
            />
          </Link>
          <span>Manoj</span>
        </div>

        <div className={styles.navLinks}>
          <ul>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link href="/">Log out</Link>
            </li>
            <li>
              <Link href="/">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
