"use client";

import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/atoms/Button';
import Modal from '@/components/molecules/Modal';
import AddPhraseForm from "@/app/AddPhraseForm";
import styles from './Header.module.css';
import logo from '../../../public/logo.png';

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logoTitleContainer}>
        <Image src={logo} alt="Logo" width={30} height={30} />
        <h1>I was gonna say that.</h1>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/scenes">Scenes</Link>
          </li>
          <li>
            <Link href="/tags">Tags</Link>
          </li>
          <li>
            <Link href="/add-phrase">Add Phrase</Link>
          </li>
          <li>
            <Link href="/add-scene">Add Scene</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
