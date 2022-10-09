import React from "react";
import styles from "../styles/services.module.scss";

const Services = () => {
  return (
    <div className={styles.contentContainer}>
      <h1>
        Recent Works <br></br>
        <span></span>
      </h1>
      <div className={styles.boxContainer}>
        <div className={styles.boxDesign}>
          <h5 bold>Task Tracker using React </h5>
          <p>
            You want to launch your website, you need a design for your future
            site? Reach out to me and we will discuss your needs and desires.
          </p>
          <button className={styles.btn}>Contact Me</button>
        </div>
        <div className={styles.boxDesign}>
          <h5 bold>Breast Cancer Detection </h5>
          <p>
            You want to refurbish your website, need a new and sleek design?
            Reach out to me and we will discuss your needs and desires.
          </p>
          <button className={styles.btn}>Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
