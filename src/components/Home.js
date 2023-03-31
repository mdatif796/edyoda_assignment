import styles from "../styles/home.module.css";
import dataAnalysis from "../images/Data-Analysis.png";
import dataWrangling from "../images/DataWrangling.png";
import avatar from "../images/userAvatar.png";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h2 className={styles.heading}>Upcoming Certifications</h2>
      <div className={styles.certificationCourse}>
        <img className={styles.img} src={dataAnalysis} alt="data-analysis" />
        <div className={styles.firstDiv}>
          <p className={styles.certificationPara}>
            CERTIFICATION <span>|</span> ATTEMPT 1
          </p>
          <h3 className={styles.courseHeading}>DATA ANALYSIS CERTIFICATION</h3>
          <p className={styles.courseDuration}>
            COMPLETED <span>|</span> 21 MAR 2022
          </p>
        </div>
        <div className={styles.secondDiv}>
          <p className={styles.structureHeading}>Exam Structure</p>
          <p className={styles.roundPara}>
            Round 1 <span>MCQS</span> <span>CODING</span>
          </p>
          <p className={styles.roundPara}>
            Round 2 <span>PROJECT</span>
          </p>
        </div>
        <h4 className={styles.examDetailsHeading}>VIEW EXAM DETAILS</h4>
      </div>
      <h2 className={styles.heading}>Continue Learning</h2>
      <p className={styles.moduleDetailsPara}>VIEW MODULE DETAILS</p>
      <div className={styles.moduleDetails}>
        <div className={styles.courseDeclaration}>
          <div className={styles.courseMaterial}>
            <div className={styles.subjectContainer}>
              <img
                className={styles.subImg}
                src={dataWrangling}
                alt="data-wrangling"
              />
              <div className={styles.rightDiv}>
                <h4 className={styles.rightDivHeading}>
                  DATA WRANGLING & VISUALIZATION
                </h4>
                <div className={styles.instructorContainer}>
                  <img
                    className={styles.instructorAvatar}
                    src={avatar}
                    alt="avatar"
                  />
                  <p className={styles.instructorPara}>Test Instructor</p>
                </div>
              </div>
            </div>
            <div className={styles.courseTask}>
              <span>Live Sessions</span>
              <strong className={styles.taskCounter}>0/13</strong>
              <p className={styles.taskDoneBar}></p>
            </div>
            <div className={styles.courseTask}>
              <span>Assignments</span>
              <strong className={styles.taskCounter}>0/3</strong>
              <p className={styles.taskDoneBar}></p>
            </div>
            <div className={styles.courseTask}>
              <span>MCQ Quiz</span>
              <strong className={styles.taskCounter}>0/6</strong>
              <p className={styles.taskDoneBar}></p>
            </div>
          </div>
          <div className={styles.coursePlan}>
            <p className={styles.planPara}>Today's Plan</p>
            <p className={styles.planTime}>21 March 2022</p>
            <h4 className={styles.planHeading}>
              Data Transformation using Pandas-3
            </h4>
            <p className={styles.feedbackPara}>
              Daily Feedback{" "}
              <span className={styles.time}>opens at 07:30 PM</span>
            </p>
            <button className={styles.liveSessionBtn}>JOIN LIVE SESSION</button>
            <p className={styles.startTime}>BEGINS AT 07:30 PM</p>
          </div>
        </div>
        <div className={styles.progressContainer}>
          <h5 className={styles.progressPara}>Progress Overview</h5>
          <div className={styles.gradeContainer}>
            <span>0%</span>
            <p>Overall Grade</p>
            <p className={styles.spaceBar}></p>
          </div>
          <div className={styles.gradeContainer}>
            <span>0%</span>
            <p>Attendance</p>
            <p className={styles.spaceBar}></p>
          </div>
          <h5 className={styles.progressHeading}>VIEW DETAILED PROGRESS</h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
