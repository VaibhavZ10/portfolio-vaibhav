import Image from "next/image";
import Link from "next/link";
import styles from "../styles/hero.module.scss";
import hiPic from "../public/assets/Hi_1-removebg-preview.png";

export default function Hero() {
  return (
    <div>
      <div className={styles.heroContainer}>
        {/* <div className={styles.heroWrapper}> */}
        <div className={styles.contentContainer}>
          <h1>
            Hello, I m <br></br>
            <span>Vaibhav Sindal</span>
          </h1>
          <div className={styles.buttonContainer}>
            {/* <Link href=""> */}
            <a className={`${styles.btnOutlineColor} ${styles.btn}`}>
              Download CV
            </a>
            {/* </Link> */}

            {/* <Link href=""> */}
            <a className={`${styles.btnFilled} ${styles.btn}`}>About Me</a>
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
