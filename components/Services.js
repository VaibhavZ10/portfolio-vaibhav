import React from "react";
import styles from "../styles/services.module.scss";
import Image from "next/image";
import Tick from "../public/assets/images/ApproveTick.png";

const Services = () => {
  return (
    <div id="services" className={styles.contentContainer}>
      <h1>
        What I Offer <br></br>
        <span>My Servcies</span>
      </h1>
      <div className={styles.boxContainer}>
        <div className={styles.boxDesign}>
          <h5 bold>
            <Image className={styles.Tick} src={Tick} alt="Tick" />
            Creating a website/web app
          </h5>
          <p>
            You want to launch your website, you need a design for your future
            site? Reach out to me and we will discuss your needs and desires.
          </p>

          {/* <button className={styles.btn}>Contact Me</button> */}
        </div>
        <div className={styles.boxDesign}>
          <h5 bold>
            <Image src={Tick} alt="Tick" />
            Rebranding a website
          </h5>
          <p>
            You want to refurbish your website, need a new and sleek design?
            Reach out to me and we will discuss your needs and desires.
          </p>
          {/* <button className={styles.btn}>Contact Me</button> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
