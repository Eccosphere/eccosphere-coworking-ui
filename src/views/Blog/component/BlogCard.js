"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./BlogCard.module.css";
import PopModal from "@/components/PopModal";
import BlogDetailCard from "./BlogDetailCard";
import img from "../../../assets/logo/New Eccosphere Logo (1).png";
import Image from "next/image";

const BlogCard = ({ blog }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div key={blog.id} className={styles["blog-card"]}>
      <Image
        src={blog.img ? blog.img : img}
        className={styles["blog-image"]}
        alt={blog.title}
      />
      <div className={styles["blog-content"]}>
        <div className={styles["blog-text"]}>
          <p className={styles["blog-title"]}>{blog.title}</p>
          <p className={styles["blog-description"]}>{blog.description}</p>
        </div>
        <button
          className={styles["blog-button"]}
          onClick={() => setIsOpen(true)}
        >
          Read More
        </button>
      </div>

      <PopModal
        onClose={() => setIsOpen(false)}
        isOpen={isOpen}
        size="lg"
        className="p-0"
      >
        <BlogDetailCard blog={blog} setIsOpen={setIsOpen} />
      </PopModal>
    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogCard;
