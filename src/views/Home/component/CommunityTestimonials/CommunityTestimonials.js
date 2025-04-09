import React, { useState, useEffect } from "react";
import styles from "./CommunityTestimonials.module.css";
import { partners, testimonials } from "../../config/homeData";

const CommunityTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles["testimonials-section"]}>
      <h2 className={styles["section-title"]}>Community & Testimonials</h2>

      {/* Testimonials Slider */}
      <div className={styles["testimonial-slider"]}>
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`${styles["testimonial-card"]} ${
              index === currentIndex ? styles["active"] : ""
            }`}
          >
            <p className={styles["testimonial-quote"]}>“{testimonial.quote}”</p>
            <div className={styles["testimonial-user"]}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className={styles["testimonial-avatar"]}
              />
              <h3 className={styles["testimonial-name"]}>{testimonial.name}</h3>
              <p className={styles["testimonial-company"]}>
                {testimonial.company}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Partnered Companies Logos */}
      <div className={styles["partners-section"]}>
        <h3 className={styles["partners-title"]}>Our Trusted Partners</h3>
        <div className={styles["partners-logos"]}>
          {partners.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Partner Logo"
              className={styles["partner-logo"]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityTestimonials;
