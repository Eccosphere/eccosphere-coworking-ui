"use client"
import React, { useState, useEffect } from "react";
import styles from "./CommunityTestimonials.module.css";
import { testimonials } from "../../config/homeData";
import Image from "next/image";

const CommunityTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManual, setIsManual] = useState(false);

  useEffect(() => {
    if (isManual) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isManual]);

  const handlePartnerClick = (testimonialId) => {
    const index = testimonials.findIndex((t) => t.id === testimonialId);
    if (index !== -1) {
      setCurrentIndex(index);
      setIsManual(true);
      setTimeout(() => setIsManual(false), 10000);
    }
  };

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
              <Image
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
          {testimonials.map((obj, index) => (
            <button
              key={index}
              className={styles["partner-logo-btn"]}
              onClick={() => handlePartnerClick(obj.id)}
            >
              <Image
                key={index}
                src={obj.image}
                alt={obj.name}
                className={styles["partner-logo"]}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityTestimonials;
