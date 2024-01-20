"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Phrase } from '@/types/phrase';
import { searchServerAction } from '@/actions/searchPhrase';

const SearchContext = createContext({
  phrases: [] as Phrase[],
  search: (query: string) => {},
});
interface SearchProviderProps {
  children: ReactNode;
}
export const useSearch = () => useContext(SearchContext);

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [phrases, setPhrases] = useState<Phrase[]>([]);

  const search = async (query: string) => {
    const formData = new FormData();
    formData.append('query', query);

    const result = await searchServerAction(formData);
    setPhrases(result);
  };

  return (
    <SearchContext.Provider value={{ phrases, search }}>
      {children}
    </SearchContext.Provider>
  );
};
