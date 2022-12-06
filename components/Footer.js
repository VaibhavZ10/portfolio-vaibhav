import Image from "next/image";
import Link from "next/link";
import styles from "../styles/footer.module.scss";
import Mail from "../public/assets/images/Mail.png";
import Twitter from "../public/assets/images/Twitter.png";
import Insta from "../public/assets/images/Insta.png";

export default function footer() {
  return (
    <div id="contact">
      <div className={styles.footerContainer}>
        <div className={styles.footerWrapper}>
          <div className={styles.titleContainer}>
            <h3>Vaibhav Sindal</h3>
          </div>
          <div className={styles.navBar}>
            <Link href="#about">
              <a className={styles.footerLink}>About</a>
            </Link>
            <Link href="#services">
              <a className={styles.footerLink}>Services</a>
            </Link>
            <Link href="#work">
              <a className={styles.footerLink}>Portfolio</a>
            </Link>
            <Link href="/ContactForm">
              <a className={styles.footerLink}>Contact</a>
            </Link>
          </div>

          <div className={styles.iconColumn}>
            <a
              className={styles.footerLink}
              href="mailto:vaibhav.sindal@gmail.com"
            >
              <Image
                src={Mail}
                width={"30px"}
                height={"30px"}
                alt="Email icon"
              ></Image>{" "}
            </a>
            <a
              href="https://twitter.com/vaibhav_sindal"
              className={styles.footerLink}
            >
              <Image
                src={Twitter}
                width={"30px"}
                height={"30px"}
                alt="Twitter icon"
              ></Image>{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/vaibhav-sindal-b3325ab6/"
              className={styles.footerLink}
            >
              <Image
                src={Insta}
                width={"30px"}
                height={"30px"}
                alt="Insta icon"
              ></Image>{" "}
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
