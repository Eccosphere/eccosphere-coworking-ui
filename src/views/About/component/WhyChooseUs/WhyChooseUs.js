import React from "react";
import styles from "./WhyChooseUs.module.css";
import { whyChooseUs } from "../../config/aboutData";

const WhyChooseUs = () => {
  return (
    <div className={styles["why-choose-us"]}>
      <div className={styles["why-choose-us-container"]}>
        <div className={styles["why-choose-us-title"]}>
          <h2 className={styles["heading-text"]}>Why choose us</h2>
        </div>

        <div className="div-space-between f-wrap">
          {whyChooseUs.map((item) => (
            <div key={item.id} className={styles["card"]}>
              <div className={styles["image-container"]}>
                <img
                  className={styles["card-images"]}
                  src={item.images}
                  alt={item.title}
                />
              </div>
              <div className={styles["card-content"]}>
                <h3 className={styles["card-title"]}>{item.title}</h3>
                {item.id !== 4 ? (
                  <p className={styles["card-text"]}>{item.description}</p>
                ) : (
                  <ul className={styles["card-list"]}>
                    {item.description.map((value, index) => (
                      <li key={index} className={styles["list-item"]}>
                        {value.list}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* <div className={styles["card-body"]}></div> */}
      </div>
    </div>
  );
};

export default WhyChooseUs;
