import { useState } from "react";
import styles from "../styles/nav.module.scss";
import React from "react";
import Image from "next/image";
import logo from "../public/assets/images/logo.png";
import Link from "next/link";
import NavLink from "../components/NavLink";

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

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className={styles.navContainer}>
      <div className={styles.navWrapper}>
        <div className={styles["logo"]}>
          <a href="#hero" className={styles.footerLink}>
            <Image src={logo} width={"50"} height={"50"} alt="logo"></Image>
          </a>
        </div>
        <button className={styles.hamburger} onClick={handleToggle}>
          {navbarOpen ? "Close" : "Open"}
        </button>

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
      <div className={styles.drawer}>{navbarOpen ? "Close" : "Open"}</div>
    </div>
  );
};

export default Navbar;
