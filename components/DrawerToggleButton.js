import React from "react";
import styles from "../styles/toggle.module.scss";

const DrawerToggleButton = (props) => {
  return (
    <button className={styles.toggle_button}>
      <div className={styles.toggle_buttonLine}></div>
      <div className={styles.toggle_buttonLine}></div>
      <div className={styles.toggle_buttonLine}></div>
      <div className={styles.toggle_buttonLine}></div>
    </button>
  );
};

export default DrawerToggleButton;
