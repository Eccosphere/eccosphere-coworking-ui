import Image from "next/image";
import React from "react";
import styles from "./MainSection.module.css";
import image from "../../../../assets/spaceImages/zen_garden.jpeg";

const MainSection = () => {
  return (
    <div className={styles["main-section"]}>
      {/* Left Side - Text Content */}
      <div className={styles["main-images"]}>
        <Image src={image} alt="main Garden" className={styles["main-img"]} />
      </div>

      {/* Right Side - Image Cards */}
      <div className={styles["main-content"]}>
        <h2 className={styles["main-title"]}>
          Your Office, Our Management – A Smart Workspace Solution
        </h2>
        <p className={styles["main-text"]}>
          Eccosphere’s Managed Office spaces are fully customized, fully
          serviced, and ready-to-move-in — designed to meet your brand’s style
          and team’s comfort. Focus on your business, while we manage everything
          else: infrastructure, admin, and IT.
        </p>
        <p className={styles["main-text"]}>
          Experience a tranquil environment where you can work with clarity,
          surrounded by inspiration.
        </p>
      </div>
    </div>
  );
};

export default MainSection;
