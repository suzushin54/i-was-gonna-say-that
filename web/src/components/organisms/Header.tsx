"use client";

import React, {useState} from 'react';
import Button from '@/components/atoms/Button';
import Modal from '@/components/molecules/Modal';
import AddPhraseForm from "@/app/AddPhraseForm";
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1>I was gonna say that.</h1>
      <Button text="Add" onClick={() => setIsModalOpen(true)} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddPhraseForm />
      </Modal>
    </header>
  );
};

export default Header;
