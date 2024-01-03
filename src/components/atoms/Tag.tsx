import React from "react";
import styles from './Tag.module.css';

type TagProps = {
  children: React.ReactNode;
};

const Tag: React.FC<TagProps> = ({ children }) => {
  return <span className={styles.tag}>{children}</span>;
};

export default Tag;
