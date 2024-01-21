"use client";

import React, {useState} from 'react';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';
import {searchServerAction} from '@/actions/searchPhrase';
import {useSearch} from '@/providers/SearchContext';

import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const {setPhrases} = useSearch();

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
    </div>
  );
};

export default SearchBar;
