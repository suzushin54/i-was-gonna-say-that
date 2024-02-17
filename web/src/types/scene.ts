import {Timestamps} from "@/types/timestamps";

export type Scene = {
  id: number;
  name: string;
  note: string | null | undefined;
} & Partial<Timestamps>; // Partial<Timestamps> means that the type is optional

