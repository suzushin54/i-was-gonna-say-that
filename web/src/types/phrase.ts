import { Timestamps } from '@/types/timestamps';

export type Phrase = {
  id: number;
  sceneName: string;
  phrase: string;
  japaneseTranslation: string;
  tags: string[];
} & Timestamps
