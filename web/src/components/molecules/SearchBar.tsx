"use client";

import React, {useState} from 'react';
import {useDebounce} from 'react-use';
import Input from '@/components/atoms/Input';
import {searchServerAction} from '@/actions/searchPhrase';
import {useSearch} from '@/providers/SearchContext';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // const [selectedSuggestion, setSelectedSuggestion] = useState<SelectOption | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [suggestionOptions, setSuggestionOptions] = useState([]);
  const {setPhrases} = useSearch();

  useDebounce(
    () => {
      if (searchQuery) {
        setIsFetching(true);
        fetch(`http:///localhost:4000/phrases/suggest?q=${encodeURIComponent(searchQuery)}`)
          .then(response => response.json())
          .then(data => {
            setSuggestionOptions(data);
            setIsFetching(false);
          })
          .catch(() => {
            setIsFetching(false);
          });
      } else {
        setSuggestionOptions([]);
      }
    },
    200,
    [searchQuery]
  );

  const handleInputChange = (newValue: string) => {
    setSearchQuery(newValue);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await executeSearch(searchQuery);
  };

  const handleSuggestionSelect = async (suggestion: string) => {
    setSearchQuery(suggestion);
    await executeSearch(suggestion);
  };

  const executeSearch = async (query: string) => {
    const formData = new FormData();
    formData.append('query', query);
    const result = await searchServerAction(formData);
    setPhrases(result);
    setSuggestionOptions([]);
    setSearchQuery('');
  };

  return (
    <div className={styles.searchBar}>
      <form onSubmit={handleSubmit}>
        <Input
          className={styles.searchInput}
          value={searchQuery}
          onChange={(e) => handleInputChange(e.target.value)}
          name="query"
          placeholder="Search phrases or japanese characters"
        />
        {isFetching && <div>Loading...</div>}
        {suggestionOptions.length > 0 && (
          <ul className={styles.suggestionsList}>
            {suggestionOptions.map((suggestion, index) => (
              <li key={index} onClick={() => handleSuggestionSelect(suggestion)}>
                {suggestion}
              </li>))}
          </ul>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
