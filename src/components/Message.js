import styles from "../styles/message.module.css";
import msg from "../images/message.png";

const Message = () => {
  return <img className={styles.messageIcon} src={msg} alt="message-icon" />;
};

export default Message;
