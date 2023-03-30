import { useState } from "react";
import styles from "../styles/dropdownContainer.module.css";
import downArrow from "../images/down.png";
import upArrow from "../images/up.png";
import ProgramContainer from "./ProgramContainer";

const DropdownContainer = () => {
  const [activeCourse, setActiveCourse] = useState("DS031221");
  const [arrowUp, setArrowUp] = useState(false);
  const handleArrowDown = () => {
    setArrowUp(!arrowUp);
  };
  const handleActiveCourse = (course) => {
    setActiveCourse(course);
  };
  return (
    <>
      <div className={styles.dropdownContainer}>
        <p>{activeCourse}</p>
        <img
          onClick={handleArrowDown}
          className={styles.arrow}
          src={arrowUp ? upArrow : downArrow}
          alt="down-arrow"
        />
        <p>Data Scientist Program</p>
      </div>
      {arrowUp ? (
        <ProgramContainer
          activeCourse={activeCourse}
          handleActiveCourse={handleActiveCourse}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default DropdownContainer;
