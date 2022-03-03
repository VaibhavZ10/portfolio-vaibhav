import Image from "next/image";
import Link from "next/link";
import styles from "../styles/about.module.scss";
import helpPic from "../public/assets/Help-removebg-preview.png";

export default function AboutSection() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.headingContainer}>
        <h1>About Me</h1>
        <div className={styles.containerContent}>
          <div className={styles.imageContainer}>
            <Image src={helpPic} alt="Help" />
          </div>
          <div className={styles.aboutText}>
            <p>
              An IT undegrad student, Frontend developer, working in designing
              and web technologies, delivering quality work.
            </p>
            <div className={styles.buttonContainer}>
              <a className={`${styles.btnFilled} ${styles.btn}`}>Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
