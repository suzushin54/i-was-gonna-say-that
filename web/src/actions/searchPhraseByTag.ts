"use server";

import { Phrase } from '@/types/phrase';

type FilteredPhrases= Phrase[];

export async function filterPhrasesByTag(tagName: string) {
  const response = await fetch(`http://host.docker.internal:4000/phrases?tag=${tagName}`);
  if (!response.ok) {
    throw new Error('サーバーからフレーズを取得できませんでした。');
  }
  const result: FilteredPhrases = await response.json();
  return result;
}
