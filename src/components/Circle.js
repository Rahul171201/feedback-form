import styles from "../styles/Circle.module.css";

const Circle = ({ children }) => {
  return (
    <main className={styles.mainBox}>
      <div className={styles.circle}>{children}</div>
    </main>
  );
};

export default Circle;
