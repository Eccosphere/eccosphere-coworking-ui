import React from "react";
import styles from "./Amenities.module.css";
import { amenities } from "../../config/homeData";

const Amenities = () => {
  return (
    <div className={styles["amenities"]}>
      <div className={styles["amenities-container"]}>
        <div className={styles["amenities-title"]}>
          <h2 className={styles["heading-text"]}>
            Amenities That work for you
          </h2>
        </div>

        <div className={styles["amenities-grid"]}>
          {amenities.map((amenities) => (
            <div key={amenities.id} className={styles["amenities-card"]}>
              <img
                src={amenities.img}
                className={styles["amenities-image"]}
                alt={amenities.title}
              />
              <div className={styles["amenities-content"]}>
                <p className={styles["amenities-title-text"]}>{amenities.title}</p>
                <p className={styles["amenities-description"]}>
                  {amenities.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
