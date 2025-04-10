import React from "react";
import styles from "./MembershipPlan.module.css";
import { membershipPlan } from "../../config/homeData";
import Link from "next/link";
import Image from "next/image";

const MembershipPlan = () => {
  return (
    <div className={styles["membership-plan-container"]}>
      <div className={styles["membership-plan"]}>
        <h2 className={styles["heading-text"]}>Our Membership Plan</h2>
        <div className={styles["card-container"]}>
          {membershipPlan.map((plan, index) => (
            <div className={styles["card"]} key={`${plan.id}-${index}`}>
              <Image
                src={plan.img}
                className={styles["card-img"]}
                alt={plan.title}
              />
              <p className={styles["card-header"]}>{plan.title}</p>
              <div className={styles["card-body"]}>
                <p className={styles["body-md"]}>{plan.description}</p>
                <p className={styles["body-lg"]}>
                  *Terms and Condition Applied
                </p>
                <div className="div-center">
                  <Link href={"tel:+918506054055"}>
                    <button className={styles["card-btn"]}>Call us Now</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembershipPlan;
