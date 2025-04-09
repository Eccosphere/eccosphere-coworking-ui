import React from "react";
import styles from "./BlogDetailCard.module.css";
import PropTypes from "prop-types";
import CloseIcon from "../../../assets/iconSvg/close.svg";
import Image from "next/image";

const BlogDetailCard = ({ blog, setIsOpen }) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.blogCard}>
      <Image src={blog.img} alt={blog.title} className={styles.blogImage} />
      <button className={styles.btnClose} onClick={handleClose}>
        <Image src={CloseIcon} alt="close-icon" className={styles.closeIcon} />
      </button>
      <div className={styles.blogContent}>
        <h2 className={styles.blogTitle}>{blog.title}</h2>
        <p className={styles.blogMeta}>
          By <span className={styles.author}>{blog.author}</span> | {blog.date}
        </p>
        <p className={styles.blogText}>{blog.content}</p>
      </div>
    </div>
  );
};

BlogDetailCard.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default BlogDetailCard;
