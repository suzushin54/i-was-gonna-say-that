"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Phrase } from '@/types/phrase';

const SearchContext = createContext({
  phrases: [] as Phrase[],
  setPhrases: (phrases: Phrase[]) => {},
});
interface SearchProviderProps {
  children: ReactNode;
}
export const useSearch = () => useContext(SearchContext);

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [phrases, setPhrases] = useState<Phrase[]>([]);

  return (
    <SearchContext.Provider value={{ phrases, setPhrases }}>
      {children}
    </SearchContext.Provider>
  );
};
