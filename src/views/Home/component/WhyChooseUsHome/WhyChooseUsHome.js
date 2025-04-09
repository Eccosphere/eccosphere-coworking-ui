import React from "react";
import styles from "./WhyChooseUsHome.module.css";
import { whyChooseUs } from "../../config/homeData";

const WhyChooseUsHome = () => {
  return (
    <div className={styles["why-choose-us"]}>
      <div className={styles["why-choose-us-container"]}>
        <div className={styles["why-choose-us-title"]}>
          <h2 className={styles["heading-text"]}>Why choose us</h2>
        </div>

        <div className="div-space-around f-wrap">
          {whyChooseUs.map((item) => (
            <div key={item.id} className={styles["card"]}>
              {item.icon}
              <div className={styles["card-content"]}>
                <h3 className={styles["card-title"]}>{item.title}</h3>
                <p className={styles["card-text"]}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsHome;
