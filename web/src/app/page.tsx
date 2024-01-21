import React from 'react';
import Header from '@/components/organisms/Header';
import MainContent from '@/components/templates/MainContent';
import styles from './page.module.css';

export default async function PhraseListPage() {
  return (
    <main className={styles.main}>
      <div>
        <main className={styles.main}>
          <Header />
          <MainContent />
        </main>
      </div>
    </main>
  );
}
