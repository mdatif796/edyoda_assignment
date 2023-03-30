import { IoIosHome } from "react-icons/io";
import { GoFileSubmodule } from "react-icons/go";
import { GiTeacher } from "react-icons/gi";
import styles from "../styles/menu.module.css";

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.menu}>
        <IoIosHome />
        <p>HOME</p>
      </div>
      <div className={styles.menu}>
        <GoFileSubmodule />
        <p>MODULES</p>
      </div>
      <div className={styles.menu}>
        <GiTeacher />
        <p>INSTRUCTORS</p>
      </div>
    </div>
  );
};

export default Menu;
