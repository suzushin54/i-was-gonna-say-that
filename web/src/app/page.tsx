import React from 'react';
import PhraseTable from '@/components/molecules/PhraseTable';
import Header from '@/components/organisms/Header';
import styles from './page.module.css';

export default async function PhraseListPage() {
  const response = await fetch('http://host.docker.internal:4000/phrases', { next: { revalidate: 60 } });
  const phrases = await response.json();

  return (
    <main className={styles.main}>
      <div>
        <Header />
        <PhraseTable phrases={phrases} />
      </div>
    </main>
  );
}
