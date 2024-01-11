"use client";

import React, { useState } from 'react';
import Button from '@/components/atoms/Button';
import Modal from '@/components/molecules/Modal';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1>フレーズ一覧</h1>
      <Button text="新規追加" onClick={() => setIsModalOpen(true)} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};

export default Header;
