import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({text, onClick, type = "submit", className = '', variant = 'primary'}) => {
  const buttonStyle = variant === 'primary' ? styles.primaryButton : styles.secondaryButton;

  return (
    <button type={type} onClick={onClick} className={`${styles.button} ${buttonStyle} ${className}`}>
      {text}
    </button>
  );
};

export default Button;
