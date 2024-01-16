import React from 'react';
import Header from '@/components/organisms/Header';
import SearchBar from '@/components/molecules/SearchBar';
import PhraseTable from '@/components/molecules/PhraseTable';
import styles from './page.module.css';

export default async function PhraseListPage() {
  const handleSearch = async () => {}

  const response = await fetch('http://host.docker.internal:4000/phrases', { next: { revalidate: 60 } });
  const phrases = await response.json();

  return (
    <main className={styles.main}>
      <div>
        <Header />
        <SearchBar />
        <PhraseTable phrases={phrases} />
      </div>
    </main>
  );
}
