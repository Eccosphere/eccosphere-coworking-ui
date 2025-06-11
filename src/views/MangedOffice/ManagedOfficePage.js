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
      <div className={styles["info-section"]}>
        <h2>What are Managed Offices?</h2>
        <p>
          Managed offices are turnkey workspace solutions that provide
          businesses with fully-equipped, professionally maintained office
          spaces without the hassles of day-to-day operations management.
        </p>
        <div className={styles["benefits"]}>
          <h3>Key Benefits:</h3>
          <ul>
            <li>Flexible lease terms and scalable space options</li>
            <li>Fully furnished and equipped workspaces</li>
            <li>Professional reception and administrative support</li>
            <li>IT infrastructure and technical support</li>
            <li>Facility management and maintenance</li>
            <li>Meeting rooms and collaborative spaces</li>
            <li>Cost-effective solution with predictable monthly expenses</li>
          </ul>
        </div>
        <div className={styles["features"]}>
          <h3>Our Managed Office Solutions Include:</h3>
          <ul>
            <li>Custom office design and layout</li>
            <li>High-speed internet and networking</li>
            <li>Security and access control</li>
            <li>Cleaning and maintenance services</li>
            <li>Utilities and facility management</li>
            <li>Break-out areas and pantry services</li>
            <li>24/7 building access</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManagedOfficePage;
