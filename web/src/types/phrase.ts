import { Timestamps } from '@/types/timestamps';

export type Phrase = {
  id: number;
  scene: string;
  phrase: string;
  tags: string[];
} & Timestamps
