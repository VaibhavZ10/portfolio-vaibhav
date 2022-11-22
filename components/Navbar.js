import { useState } from "react";
import DrawerToggleButton from "../components/DrawerToggleButton";

import styles from "../styles/nav.module.scss";

import React from "react";

const Navbar = () => {
  // const [scrolled, setScrolled] = useState(false);
  // const handleScroll = () => {
  //   const offset = window.scrollY;
  //   if (offset > 200) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  // });

  // let navbarClasses = ["navBar"];
  // if (scrolled) {
  //   navbarClasses.push("scrolled");
  // }
  return (
    <div className={`${styles.navContainer}`}>
      <div className={styles.navWrapper}>
        <div className={styles["logo"]}>
          <a href="#">VS</a>
        </div>

        <ul className={styles["nav-options"]}>
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
          <div>
            <DrawerToggleButton />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
