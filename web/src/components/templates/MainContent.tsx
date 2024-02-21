import React from 'react';
import SearchBar from '@/components/molecules/SearchBar';
import PhraseTable from '@/components/organisms/PhraseTable';
import {SearchProvider} from '@/providers/SearchContext';
import {Phrase} from '@/types/phrase';

export default async function MainContent() {
  const phrases: Phrase[] = await fetch('http://host.docker.internal:4000/phrases')
    .then(response => response.json());

  return (
    <SearchProvider>
      <SearchBar />
      <PhraseTable phrases={phrases} />
    </SearchProvider>
  );
};
