import { IoIosHome } from "react-icons/io";
import { GoFileSubmodule } from "react-icons/go";
import { GiTeacher } from "react-icons/gi";
import styles from "../styles/menu.module.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <Link to="/">
        <div className={styles.menu}>
          <IoIosHome />
          <p>HOME</p>
        </div>
      </Link>
      <Link to="/module">
        <div className={styles.menu}>
          <GoFileSubmodule />
          <p>MODULES</p>
        </div>
      </Link>
      <Link to="/instructor">
        <div className={styles.menu}>
          <GiTeacher />
          <p>INSTRUCTORS</p>
        </div>
      </Link>
    </div>
  );
};

export default Menu;
