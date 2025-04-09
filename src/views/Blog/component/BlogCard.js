import React from "react";
import PropTypes from "prop-types";
import styles from "./BlogCard.module.css";

const BlogCard = ({ blog }) => {
  return (
    <div key={blog.id} className={styles["blog-card"]}>
      <img src={blog.img} className={styles["blog-image"]} alt={blog.title} />
      <div className={styles["blog-content"]}>
        <p className={styles["blog-title"]}>{blog.title}</p>
        <p className={styles["blog-description"]}>{blog.description}</p>
        <button className={styles["blog-button"]}>Read More</button>
      </div>
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
