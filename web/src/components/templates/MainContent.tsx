import React from 'react';
import SearchBar from '@/components/molecules/SearchBar';
import PhraseTable from '@/components/molecules/PhraseTable';
import { SearchProvider } from '@/providers/SearchContext';
import { Phrase } from '@/types/phrase';

type MainContentProps = {
  phrases: Phrase[];
};

const MainContent = ({ phrases }: MainContentProps) => {
  return (
    <SearchProvider>
      <div>
        <SearchBar />
        <PhraseTable phrases={phrases} />
      </div>
    </SearchProvider>
  );
};

export default MainContent;
