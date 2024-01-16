"use client";

import React, { useState } from 'react';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearchClick = () => {
    onSearch(query);
  };

  return (
    <div className={styles.searchBar}>
      <Input value={query} onChange={(e) => setQuery(e.target.value)} />
      <Button text="Search" onClick={handleSearchClick} />
    </div>
  );
};

export default SearchBar;
