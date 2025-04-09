import Link from "next/link";
import Image from "next/image";
import FacebookIconSVG from "../../assets/iconSvg/facebook.svg";
import InstagramIconSVG from "../../assets/iconSvg/instagram.svg";
import LinkedinIconSVG from "../../assets/iconSvg/linkedin.svg";
import TwitterIconSVG from "../../assets/iconSvg/twitter.svg";
import styles from "./EccoFooter.module.css";
import logo from "../../assets/logo/2b04ed66-5266-462e-a866-ae810d7b4d2f.png";

const EccoFooter = () => {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-content"]}>
        <Image src={logo} alt="Eccosphere" className={styles["logo"]} />
        <p className={styles["footer-text"]}>
          We are on a mission to change how India works
        </p>
        <p className={styles["footer-text"]}>
          ©2017 Eccosphere The Coworking Sanctuary.
        </p>
      </div>

      <div className={styles["footer-contact"]}>
        <p className={styles["footer-tittle-text"]}>Contact US</p>
        <p className={styles["footer-address-text"]}>
          Eccosphere coworking Pvt. Ltd.
        </p>
        <p className={styles["footer-address-text"]}>B-61 Sector 67, Noida.</p>
        <p className={styles["footer-address-text"]}>Uttar Pardesh 201301</p>
        <p className={`${styles["footer-no-text"]} mt-2`}>
          Email - chandank@eccosphere.com
        </p>
        <p className={`${styles["footer-no-text"]} mb-3`}>
          Call Us Now - +918506054055
        </p>

        <div className={styles["text-div"]}>
          <p className={styles["follow-us-text"]}>Follow us on</p>
          <p className={styles["follow-us-text"]}>
            <Link target="_blank" href={"https://www.facebook.com/Eccosphere/"}>
              <FacebookIconSVG className={styles["footer-icon"]} />
            </Link>

            <TwitterIconSVG className={styles["footer-icon-two"]} />
            <Link
              target="_blank"
              href={"https://www.instagram.com/eccospherecowork/?hl=en"}
            >
              <InstagramIconSVG className={styles["footer-icon-two"]} />
            </Link>

            <Link
              target="_blank"
              href={
                "https://www.linkedin.com/company/eccosphere-coworking/posts/?feedView=all"
              }
            >
              <LinkedinIconSVG className={styles["footer-icon-two"]} />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EccoFooter;
