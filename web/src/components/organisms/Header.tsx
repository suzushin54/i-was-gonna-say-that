"use client";

import React, { useState } from 'react';
import ButtonComponent from '@/components/atoms/Button';
import ModalComponent from '@/components/molecules/Modal';

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header>
      <h1>フレーズ一覧</h1>
      <ButtonComponent text="新規追加" onClick={() => setIsModalOpen(true)} />
      <ModalComponent isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};

export default Header;
