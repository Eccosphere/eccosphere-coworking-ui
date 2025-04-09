import React from "react";
import styles from "./OurWorkspaces.module.css";
import { workspaces } from "../../config/homeData";

const OurWorkspaces = () => {
  return (
    <div className={styles["our-workspaces"]}>
      <div className={styles["our-workspaces-container"]}>
        <div className={styles["our-workspaces-title"]}>
          <h2 className={styles["heading-text"]}> Our Workspaces</h2>
        </div>

        <div className="div-space-between f-wrap">
          {workspaces.map((item) => (
            <div key={item.id} className={styles["card"]}>
              <img
                src={item.image}
                alt={item.name}
                className={styles["card-images"]}
              />
              <div className={styles["card-content"]}>
                <h3 className={styles["card-title"]}>{item.name}</h3>
                <p className={styles["card-text"]}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWorkspaces;
