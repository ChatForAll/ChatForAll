import ChatBox from "./components/ChatBox";
import styles from "./style.css";

export default function Home() {
  return (
    <div className={styles.App}>
      <ChatBox />
    </div>
  );
}
