import React from "react";
import styles from "./GalleryPage.module.css";
import { images } from "./config/galleryData";
import Image from "next/image";

const GalleryPage = () => {
  return (
    <div className={styles["gallery"]}>
      <div className={styles["gallery-container"]}>
        <div className={styles["header-div"]}>
          <h1 className={styles["heading-text"]}>
            Experience the Future of Workspaces
          </h1>
          <h3 className={styles["heading-text"]}>
            A Dynamic Coworking Environment Fostering Innovation, Productivity,
            and Collaboration.
          </h3>
        </div>
      </div>

      <div className={styles["gallery-grid"]}>
        {images.map((src, index) => (
          <div key={index} className={styles["gallery-item"]}>
            <Image src={src} alt={`Workspace ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
