import PhraseTable from '@/components/molecules/PhraseTable';
import styles from './page.module.css';

export default async function PhraseListPage() {
  const response = await fetch('http://host.docker.internal:3001/phrases');
  const phrases = await response.json();

  return (
    <main className={styles.main}>
      <div>
        <h1>フレーズ一覧</h1>
        <PhraseTable phrases={phrases} />
      </div>
    </main>
  );
}
