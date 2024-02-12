"use client";

import React from 'react';
import Tag from '../atoms/Tag';
import { useSearch } from '@/providers/SearchContext';
import { filterPhrasesByTag } from '@/actions/searchPhraseByTag';
import { Phrase } from '@/types/phrase';
import styles from './PhraseTable.module.css';

type PhraseTableProps = {
  phrases: Phrase[]; // 初期表示のPhrases
};

const PhraseTable: React.FC<PhraseTableProps> = ({phrases: initialPhrases}) => {
  const { phrases: contextPhrases } = useSearch();
  const { setPhrases } = useSearch();

  // 検索結果があればそれを、なければ初期表示のPhrasesを表示する
  const phrases = contextPhrases.length > 0 ? contextPhrases : initialPhrases;

  const handleTagClick = async (tagName: string) => {
    try {
      const filteredPhrases = await filterPhrasesByTag(tagName);
      setPhrases(filteredPhrases);
    } catch (error) {
      console.error('フレーズの絞り込みに失敗しました。', error);
    }
  };

  return (
    <table className={styles.myTable}>
      <thead>
      <tr>
        <th>ID</th>
        <th>Scene Name</th>
        <th>Phrase</th>
        <th>Japanese</th>
        <th>Tags</th>
      </tr>
      </thead>
      <tbody>
      {phrases.map((phrase) => (
        <tr key={phrase.id}>
          <td>{phrase.id}</td>
          <td>{phrase.sceneName}</td>
          <td>{phrase.phrase}</td>
          <td>{phrase.japaneseTranslation}</td>
          <td>
            {(phrase.tags || []).map((tag) =>
              <Tag key={tag} onClick={() => handleTagClick(tag)}>{tag}</Tag>
            )}
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default PhraseTable;
