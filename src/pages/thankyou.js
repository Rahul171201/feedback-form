import styles from "../styles/Home.module.css";

const Thankyou = (props) => {
  return (
    <main className={styles.main}>
      <div className={styles.mainBox}>
        <div className={styles.imageBox}>
          <img src="illustration-thank-you.svg" alt="feedback receipt"></img>
        </div>
        <div className={styles.ratingInfo}>
          <div className={styles.rate}>
            You selected {props.rating} out of 5
          </div>
        </div>
        <div className={styles.conclusionBox}>
          <h1>Thank you!</h1>
          <h3 className={styles.conclusion}>
            We appreciate you taking the time to give the rating . If you ever
            need more support, don't hesitate to get in touch!
          </h3>
        </div>
      </div>
    </main>
  );
};

export default Thankyou;
