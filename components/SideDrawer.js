import React from "react";
import styles from "../styles/side.module.scss";

export const SideDrawer = (props) => {
  return (
    <nav className={styles.sideDrawer}>
      <ul>
        <li className={styles.option}>
          <a href="#">About</a>
        </li>

        <li className={styles.option}>
          <a href="#">Services</a>
        </li>
        <li className={styles.option}>
          <a href="#">Portfolio</a>
        </li>
        <li className={styles.option}>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
