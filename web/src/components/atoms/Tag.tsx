import React from "react";
import styles from './Tag.module.css';

type TagProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const Tag: React.FC<TagProps> = ({ children, onClick }) => {
  return <span className={styles.tag} onClick={onClick}>{children}</span>;
};

export default Tag;
