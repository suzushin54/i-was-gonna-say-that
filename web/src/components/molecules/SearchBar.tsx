"use client";

import React, { useState } from 'react';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';
import { Phrase } from '@/types/phrase';
import { searchServerAction } from '@/actions/searchPhrase';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [phrases, setPhrases] = useState<Phrase[]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = await searchServerAction(formData);
    setPhrases(result);
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

      {phrases.map((phrase, index) => (
        <div key={index}>
          <div><strong>Scene:</strong> {phrase.scene}</div>
          <div><strong>Phrase:</strong> {phrase.phrase}</div>
          <div><strong>Tags:</strong> {phrase.tags.join(', ')}</div>
        </div>
      ))}
    </div>
  );
};

export default SearchBar;
