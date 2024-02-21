import { Timestamps } from '@/types/timestamps';

export type Phrase = {
  id: number;
  sceneId: number;
  sceneName: string;
  phrase: string;
  japaneseTranslation: string;
  tags: string[];
} & Partial<Timestamps>; // Partial<Timestamps> means that the type is optional
