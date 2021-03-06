import React from "react";
import styles from "../styles/services.module.scss";

const Services = () => {
  return (
    <div className={styles.contentContainer}>
      <h1>
        What I Offer <br></br>
        <span>My Servcies</span>
      </h1>
      <div className={styles.boxContainer}>
        <div className={styles.boxDesign}>
          <h5 bold>Creation of a website/web app design </h5>
          <p>
            You want to launch your website, you need a design for your future
            site? Reach out to me and we will discuss your needs and desires.
          </p>
        </div>
        <div className={styles.boxDesign}>
          <h5 bold>Rebranding </h5>
          <p>
            You want to refurbish your website, need a new and sleek design?
            Reach out to me and we will discuss your needs and desires.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
