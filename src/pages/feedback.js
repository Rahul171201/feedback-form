import styles from "../styles/Home.module.css";
import Circle from "../components/Circle";
import { useState } from "react";

const Feedback = () => {
  const [rating, setRating] = useState(0);

  const handleSelect = (e) => {
    console.log(e);
  };

  return (
    <main className={styles.main}>
      <div className={styles.mainBox}>
        <div className={styles.iconBar}>
          <div className={styles.noHover}>
            <Circle>
              <img
                src="icon-star.svg"
                alt="star icon"
                className={styles.icon}
              ></img>
            </Circle>
          </div>
        </div>
        <div className={styles.description}>
          <h1>How did we do?</h1>
          <h3 className={styles.detail}>
            Please let us know how you did with our support! All feedback is
            appreciated to help us improve our offering
          </h3>
        </div>
        <div className={styles.optionBox}>
          {[1, 2, 3, 4, 5].map((item) => {
            return (
              <Circle key={item} onClick={handleSelect}>
                <div>{item}</div>
              </Circle>
            );
          })}
        </div>
        <div className={styles.buttonBox}>
          <button className={styles.submitButton}>SUBMIT</button>
        </div>
      </div>
    </main>
  );
};

export default Feedback;
