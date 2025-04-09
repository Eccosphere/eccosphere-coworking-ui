import React from "react";
import styles from "./OurMissionAndVision.module.css";
import { getIcon, missionAndVision } from "../../config/aboutData";

const OurMissionAndVision = () => {
  return (
    <div className={styles["our-mission-and-vision"]}>
      <div className={styles["our-mission-and-vision-container"]}>
        <div className={styles["our-mission-tittle"]}>
          <h2 className={styles["heading-text"]}>Our Mission & Vision</h2>
        </div>
        <div className={styles["card-container"]}>
          {missionAndVision.map((item) => (
            <div key={item.id} className={styles["card"]}>
              <div className="div-center">
                <div className={styles["circle"]}>
                  {getIcon(item.title.toLowerCase())}
                </div>
              </div>
              <p className={styles["card-title"]}>{item.title}</p>
              <p className={styles["card-text"]}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMissionAndVision;
