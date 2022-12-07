import React from "react";
import styles from "../styles/services.module.scss";
import Image from "next/image";
import task from "../public/assets/task.png";
import alambre from "../public/assets/alambre.png";

const Services = () => {
  return (
    <div id="work" className={styles.contentContainer}>
      <h1>
        Recent Works <br></br>
        <span></span>
      </h1>
      <div className={styles.boxContainer}>
        <div className={styles.boxDesign}>
          <h5 bold>Task Tracker using React </h5>
          <Image src={task} width={"275px"} height={"170px"} alt="task" />
          <p>A daily task tracker app using built using ReactJS.</p>
          <a href="https://github.com/VaibhavZ10/react-task-tracker">
            {" "}
            <button className={styles.btn}>View Project</button>
          </a>{" "}
        </div>
        <div className={styles.boxDesign}>
          <h5 bold>Alambre Cables Website </h5>
          <Image src={alambre} width={"275px"} height={"150px"} alt="alambre" />
          <p>
            Delivered the design and front-end profile for a Mumbai based Alarm
            break company : Alambre.
          </p>
          <a href="https://alambre-cables-website.vercel.app/">
            <button className={styles.btn}>View Project</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
