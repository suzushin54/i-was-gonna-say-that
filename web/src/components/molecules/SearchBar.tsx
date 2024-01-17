"use client";

import React, { useState } from 'react';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';
import { searchServerAction } from '@/actions/searchPhrase';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [phrases, setPhrases] = useState<string[]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = await searchServerAction(formData);
    setPhrases(result.phrases);
  };

  return (
    <div className={styles.searchBar}>
      <form onSubmit={handleSubmit}>
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          name="query"
        />
        <Button text="Search" />
      </form>

      {/* TODO: 検索結果の表示 */}
      {phrases.map((phrase, index) => (
        <div key={index}>{phrase}</div>
      ))}
    </div>
  );
};

export default SearchBar;
