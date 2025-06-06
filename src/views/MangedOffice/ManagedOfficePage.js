import React from "react";
import styles from "./ManagedOfficePage.module.css";
import MainSection from "./component/MainSection/MainSection";

const ManagedOfficePage = () => {
  return (
    <div className={styles["managed-office"]}>
      <div className={styles["managed-office-container"]}>
        <div className={styles["header-div"]}>
          <h1 className={styles["heading-text"]}>Managed Office Spaces</h1>
          <h3 className={styles["heading-text"]}>
            Fully customized, professionally managed offices — so you focus on
            growth, not operations.
          </h3>
        </div>
      </div>
      <div className={styles["managed-office-container"]}>
        <MainSection />
      </div>
    </div>
  );
};

export default ManagedOfficePage;
