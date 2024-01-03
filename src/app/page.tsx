import styles from './page.module.css';

type Phrase = {
  id: number;
  scene: string;
  phrase: string;
  tags: string[];
}

export default async function PhraseListPage() {
  const response = await fetch('http://host.docker.internal:3001/phrases');
  const phrases = await response.json();

  return (
    <main className={styles.main}>
      <div>
        <h1>フレーズ一覧</h1>
        <table className={styles.myTable}>
          <thead>
          <tr>
            <th>ID</th>
            <th>シーン</th>
            <th>フレーズ</th>
            <th>タグ</th>
          </tr>
          </thead>
          <tbody>
          {phrases.map((phrase: Phrase) => (
            <tr key={phrase.id}>
              <td>{phrase.id}</td>
              <td>{phrase.scene}</td>
              <td>{phrase.phrase}</td>
              <td>{phrase.tags.join(', ')}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
