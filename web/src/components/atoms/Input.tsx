import React from 'react';
import styles from './Input.module.css';

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, className, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={`${styles.input} ${className}`}
      placeholder={placeholder}
    />
  );
};

export default Input;
