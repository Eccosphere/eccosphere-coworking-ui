"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./AmenitiesSlider.module.css";
import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const AmenitiesSlider = ({ images }) => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  const scrollLeftRight = useCallback(
    (newIndex) => {
      if (newIndex < 0) {
        setCurrentIndex(images.length - 1);
      } else if (newIndex >= images.length) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(newIndex);
      }
    },
    [images.length]
  );

  const handleManualSlide = (newIndex) => {
    setAutoSlide(false);
    scrollLeftRight(newIndex);

    setTimeout(() => {
      setAutoSlide(true);
    }, 5000);
  };

  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      scrollLeftRight(currentIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, autoSlide, scrollLeftRight]);

  useEffect(() => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth <= 768 ? 150 : 250;
      sliderRef.current.scrollLeft = currentIndex * scrollAmount;

      sliderRef.current.scrollTo({
        left: currentIndex * scrollAmount,
        block: "nearest",
      });
    }
  }, [currentIndex]);

  return (
    <div className={styles.sliderContainer}>
      <button
        className={styles.navButton}
        onClick={() => handleManualSlide(currentIndex - 1)}
      >
        <FaChevronLeft />
      </button>
      <div className={styles.imageSlider} ref={sliderRef}>
        {images.map((src, index) => (
          <div
            key={index}
            className={`${styles.amenityCard} ${
              index === currentIndex ? styles.active : ""
            }`}
          >
            <div className={styles.imageWrapper}>
              <Image
                key={index}
                src={src.img}
                alt={`Slide ${index}`}
                className={styles.image}
              />
            </div>
            <p className={styles.amenityName}>{src.title}</p>
          </div>
        ))}
      </div>
      <button
        className={styles.navButton}
        onClick={() => handleManualSlide(currentIndex + 1)}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

AmenitiesSlider.propTypes = {
  images: PropTypes.array.isRequired,
};
export default AmenitiesSlider;
