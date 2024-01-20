import React from 'react';
import Header from '@/components/organisms/Header';
import MainContent from '@/components/templates/MainContent';
import styles from './page.module.css';

export default async function PhraseListPage() {

  const response = await fetch('http://host.docker.internal:4000/phrases', {next: {revalidate: 60}});
  const phrases = await response.json();

  return (
    <main className={styles.main}>
      <div>
        <main className={styles.main}>
          <Header />
          <MainContent phrases={phrases} />
        </main>
      </div>
    </main>
  );
}
