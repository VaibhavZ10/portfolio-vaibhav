import Image from "next/image";
import Link from "next/link";
import styles from "../styles/about.module.scss";
import helpPic from "../public/assets/Help-removebg-preview.png";

export default function AboutSection() {
  return (
    <div id="about" className={styles.aboutContainer}>
      <div className={styles.headingContainer}>
        <h1>About Me</h1>
        <div className={styles.aboutWrapper}>
          <div className={styles.imageContainer}>
            <Image src={helpPic} alt="Help" />
          </div>
          <div className={styles.contentContainer}>
            <p>
              An IT undergrad student with an experience in Front-end web
              development and passion for responsive website design. Meticulous
              and inquisitive for web apps and product designs.
            </p>
            <div className={styles.buttonContainer}>
              <a
                href="#contact"
                className={`${styles.btnFilled} ${styles.btn}`}
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
