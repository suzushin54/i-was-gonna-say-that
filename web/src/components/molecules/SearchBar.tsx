"use client";

import React, {useEffect, useState} from 'react';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';
import {searchServerAction} from '@/actions/searchPhrase';
import {useSearch} from '@/providers/SearchContext';

import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [query, setQuery] = useState('');
  const {setPhrases} = useSearch();

  useEffect(() => {
    if (query.length > 0 ) {
      fetch(`http:///localhost:4000/phrases/suggest?q=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => setSuggestions(data))
        .catch(error => console.log('Error fetching suggestions: ', error));
    } else {
      setSuggestions([]);
    }
  }, [query]);

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
          className={styles.searchInput}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          name="query"
        />
        <Button className={styles.searchButton} text="Search" />
        {suggestions.length > 0 && (
          <div className={styles.suggestions}>
            {suggestions.map((suggestion, index) => (
              <div key={index}>{suggestion}</div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
