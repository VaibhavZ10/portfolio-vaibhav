import { useState } from "react";
import styles from "../styles/nav.module.scss";
import React from "react";
import Image from "next/image";
import logo from "../public/assets/images/logo.png";
import close from "../public/assets/images/close.svg";
import hamburger from "../public/assets/images/hamburger.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const handleToggle = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div className={styles.navContainer}>
      <div className={styles.navWrapper}>
        <div className={styles.logo}>
          <a href="#hero" className={styles.footerLink}>
            <Image src={logo} width={"50"} height={"50"} alt="logo"></Image>
          </a>
        </div>
        <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <Image src={close} width={"20"} height={"20"} alt="close" />
          ) : (
            <Image src={hamburger} width={"20"} height={"20"} alt="hamburger" />
          )}
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
      {isOpen ? (
        <div className={styles.hamContainer}>
          <li className={styles.hamOption}>
            <a href="#about">About</a>
          </li>
          <li className={styles.hamOption}>
            <a href="#services">Services</a>
          </li>
          <li className={styles.hamOption}>
            <a href="#work">Portfolio</a>
          </li>
          <li className={styles.hamOption}>
            <a href="#contact">Contact</a>
          </li>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
