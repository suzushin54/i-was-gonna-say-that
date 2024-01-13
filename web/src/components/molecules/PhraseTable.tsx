import React from 'react';
import Tag from '../atoms/Tag';
import styles from './PhraseTable.module.css';


type Phrase = {
  id: number;
  scene: string;
  phrase: string;
  tags: string[];
};

type PhraseTableProps = {
  phrases: Phrase[];
};

const PhraseTable: React.FC<PhraseTableProps> = ({ phrases }) => {
  return (
    <table className={styles.myTable}>
      <thead>
      <tr>
        <th>ID</th>
        <th>Scene</th>
        <th>Phrase</th>
        <th>Tags</th>
      </tr>
      </thead>
      <tbody>
      {phrases.map((phrase) => (
        <tr key={phrase.id}>
          <td>{phrase.id}</td>
          <td>{phrase.scene}</td>
          <td>{phrase.phrase}</td>
          <td>
            {phrase.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default PhraseTable;
