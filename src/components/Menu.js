import { IoIosHome } from "react-icons/io";
import { GoFileSubmodule } from "react-icons/go";
import { GiTeacher } from "react-icons/gi";
import styles from "../styles/menu.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Menu = () => {
  const [currentPage, setCurrentPage] = useState("HOME");
  const handleClick = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className={styles.menuContainer}>
      <Link to="/">
        <div
          onClick={() => handleClick("HOME")}
          className={currentPage === "HOME" ? styles.clickedMenu : styles.menu}
        >
          <IoIosHome />
          <p>HOME</p>
        </div>
      </Link>
      <Link to="/module">
        <div
          onClick={() => handleClick("MODULES")}
          className={
            currentPage === "MODULES" ? styles.clickedMenu : styles.menu
          }
        >
          <GoFileSubmodule />
          <p>MODULES</p>
        </div>
      </Link>
      <Link to="/instructor">
        <div
          onClick={() => handleClick("INSTRUCTORS")}
          className={
            currentPage === "INSTRUCTORS" ? styles.clickedMenu : styles.menu
          }
        >
          <GiTeacher />
          <p>INSTRUCTORS</p>
        </div>
      </Link>
    </div>
  );
};

export default Menu;
