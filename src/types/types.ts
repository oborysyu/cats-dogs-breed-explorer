type Size = {
  imperial: string;
  metric: string;
};

export interface Cat {
  adaptability: number;
  affection_level: number;
  alt_names: string;
  cat_friendly: number;
  cfa_url: string;
  child_friendly: number;
  country_code: string;
  country_codes: string;
  description: string;
  dog_friendly: number;
  energy_level: number;
  experimental: number;
  grooming: number;
  hairless: number;
  health_issues: number;
  hypoallergenic: number;
  id: string;
  indoor: number;
  intelligence: number;
  lap: number;
  life_span: string;
  name: string;
  natural: number;
  origin: 'string';
  rare: number;
  reference_image_id: string;
  rex: number;
  shedding_level: number;
  short_legs: number;
  social_needs: number;
  stranger_friendly: number;
  suppressed_tail: number;
  temperament: string;
  vcahospitals_url: string;
  vetstreet_url: string;
  vocalisation: number;
  weight: Size;
  wikipedia_url: string;
}

export interface Dog {
  bred_for: string;
  breed_group: string;
  height: Size;
  id: number;
  life_span: string;
  name: string;
  reference_image_id: string;
  weight: Size;
}

export interface Breed {
  breedId: string;
  id: string;
  imageUrl: string;
  name: string;
  petType: string;
}

export interface ImageProps {
  alt: string;
  fill: boolean;
  objectfit?: string;
  src: string;
}

export type PetType = 'dog' | 'cat';

export type Pet<T> = {
  breeds: T[];
  height: number;
  id: string;
  url: string;
  width: number;
};
