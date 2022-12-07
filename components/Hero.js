import Image from "next/image";
import Link from "next/link";
import styles from "../styles/hero.module.scss";
import hiPic from "../public/assets/Hi_1-removebg-preview.png";

export default function Hero() {
  return (
    <div id="hero">
      <div className={styles.heroContainer}>
        {/* <div className={styles.heroWrapper}> */}
        <div className={styles.contentContainer}>
          <h1>
            Hello, I am <br></br>
            <span>Vaibhav Sindal</span>
          </h1>
          <div className={styles.buttonContainer}>
            {/* <Link href=""> */}
            <a
              href="https://drive.google.com/file/d/1zi1b8RGkOEx2Q00_EDWggCZfDSdila9v/view?usp=sharing"
              className={`${styles.btnOutlineColor} ${styles.btn}`}
            >
              Download CV
            </a>
            {/* </Link> */}

            {/* <Link href=""> */}
            <a href="#about" className={`${styles.btnFilled} ${styles.btn}`}>
              About Me
            </a>
            {/* </Link> */}
          </div>
          <div className={styles.imageContainer}>
            <Image src={hiPic} alt="Hello" />
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
