import React from "react";
import styles from "./OurTeam.module.css";
import { teamMembers } from "../../config/aboutData";
import Image from "next/image";

const OurTeam = () => {
  return (
    <div className={styles.teamSection}>
      <h2 className={styles.heading}>Meet Our Team</h2>
      <div className={styles.teamGrid}>
        {teamMembers.map((member) => (
          <div key={member.id} className={styles.teamCard}>
            <Image
              src={member.image}
              alt={member.name}
              className={styles.teamImage}
            />
            <div className={styles.teamContent}>
              <h3 className={styles.teamName}>{member.name}</h3>
              <p className={styles.teamRole}>{member.role}</p>
              <p className={styles.teamBio}>{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
