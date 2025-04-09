import React from "react";
import styles from "./OurStory.module.css";
import spaceImage from "../../../../assets/spaceImages/IMG_20181013_151720-01-01.jpeg";
import img10 from "../../../../assets/spaceImages/dedicated_desk.jpeg";

const OurStory = () => {
  return (
    <div className={styles["our-story"]}>
      <div className={styles["card"]}>
        <div className={styles["card-title"]}>
          <h2 className={styles["heading-text"]}>
            Our Story – How Eccosphere Was Born
          </h2>
        </div>
        <div className={styles["card-body"]}>
          <div className={styles["card-text"]}>
            <p className={styles.description}>
              At Eccosphere, we understand that workspaces shape productivity,
              creativity, and success. That’s why we didn’t just create another
              coworking space—we built a dynamic environment where ideas thrive,
              teams grow, and businesses scale.
            </p>

            <p className={styles.description}>
              Our story began when Gautam Duggal, an experienced print
              management consultant, discovered the growing coworking culture in
              India. Inspired by the global shift towards flexible workspaces,
              he envisioned a holistic workplace that nurtures Mind, Body, and
              Work—a space where professionals could connect, create, and grow
              beyond the traditional office model.
            </p>

            <p className={styles.description}>
              Thus, Eccosphere was born—a coworking space that blends
              productivity with wellness, offering an ecosystem that fuels
              growth, innovation, and collaboration.
            </p>
          </div>
          <div className={styles["card-image-div"]}>
            <img
              src={spaceImage}
              alt="Eccosphere-coworking"
              className={styles["card-image"]}
            />
            <img
              src={img10}
              alt="Eccosphere-coworking"
              className={styles["card-image-II"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
