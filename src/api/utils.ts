import { Breed } from "@/types/types";

export const shuffle = (array: Breed[]) => {
  return array.sort(() => Math.random() - 0.5);
};
