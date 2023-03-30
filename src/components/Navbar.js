import styles from "../styles/navbar.module.css";
import userAvatar from "../images/userAvatar.png";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h3 className={styles.navHeading}>EDYODA</h3>
      <div className={styles.userContainer}>
        <p className={styles.username}>Hi Test Learner!</p>
        <img className={styles.userAvatar} src={userAvatar} alt="user-avatar" />
      </div>
    </div>
  );
};

export default Navbar;
