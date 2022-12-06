import React from "react";
import styles from "../styles/nav.module.scss";

const Drawer = ({ isOpen, handleToggle }) => {
  return (
    <>
      <div className={styles.drawerContent}>
        <ul className={styles.navOptions}>
          <li className={styles.option}>
            <a href="#about">About</a>
          </li>
          <li className={styles.option}>
            <a href="#services">Services</a>
          </li>
          <li className={styles.option}>
            <a href="#work">Portfolio</a>
          </li>
          <li className={styles.option}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Drawer;
