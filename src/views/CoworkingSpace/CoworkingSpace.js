import React from "react";
import styles from "./CoworkingSpace.module.css";

const CoworkingSpace = () => {
  return (
    <div className={styles["coworking-space"]}>
      <div className={styles["coworking-space-container"]}>
        <div className={styles["header-div"]}>
          <h1 className={styles["heading-text"]}>Coworking Spaces</h1>
          <h3 className={styles["heading-text"]}>
            Coworking Space that blends productivity with wellness, offering an
            ecosystem that fuels growth, innovation, and collaboration.
          </h3>
        </div>

        <div className={styles["content-section"]}>
          <div className={styles["benefits-container"]}>
            <h2>Why Choose Our Coworking Spaces?</h2>
            <div className={styles["benefits-grid"]}>
              <div className={styles["benefit-card"]}>
                <h3>Turnkey Solutions</h3>
                <p>
                  Move in and start working immediately with fully furnished
                  offices and all utilities included.
                </p>
              </div>
              <div className={styles["benefit-card"]}>
                <h3>Professional Management</h3>
                <p>
                  Our dedicated team handles maintenance, cleaning, and
                  day-to-day operations so you don&apos;t have to.
                </p>
              </div>
              <div className={styles["benefit-card"]}>
                <h3>Customized Spaces</h3>
                <p>
                  Tailor your workspace to reflect your brand identity and meet
                  your specific business needs.
                </p>
              </div>
              <div className={styles["benefit-card"]}>
                <h3>Growth Focused</h3>
                <p>
                  Flexible terms that scale with your business, from single
                  desks to entire floors.
                </p>
              </div>
            </div>
          </div>

          <div className={styles["features-section"]}>
            <h2>Premium Amenities</h2>
            <ul className={styles["features-list"]}>
              <li>High-speed secure internet</li>
              <li>Meeting rooms with video conferencing</li>
              <li>24/7 secure access</li>
              <li>Kitchen and refreshment areas</li>
              <li>Business-class printing services</li>
              <li>Networking events and community programs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoworkingSpace;
