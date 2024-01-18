"use server";

import { Phrase } from '@/types/phrase';

type SearchPhrasesResponse = Phrase[];

export async function searchServerAction(formData: FormData) {
  const query = formData.get('query');

  if (typeof query !== 'string') {
    throw new Error('検索クエリが不正です。');
  }

  const response = await fetch(`http://host.docker.internal:4000/phrases/search?query=${encodeURIComponent(query)}`);
  const result: SearchPhrasesResponse = await response.json();

  return result;
}
