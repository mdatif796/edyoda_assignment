import styles from "../styles/programContainer.module.css";
import { dropdown } from "../data/dropdown";

const ProgramContainer = ({ handleActiveCourse, activeCourse }) => {
  const handleClick = (e) => {
    handleActiveCourse(e.target.innerText);
  };
  return (
    <div className={styles.programContainer}>
      <p className={styles.programHeading}>Select Program</p>
      <div className={styles.program}>
        {dropdown.map((data, index) => {
          return (
            <p
              key={index}
              onClick={handleClick}
              className={activeCourse === data ? styles.active : styles.para}
            >
              {data}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ProgramContainer;
