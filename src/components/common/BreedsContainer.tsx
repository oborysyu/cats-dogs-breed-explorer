'use client';

import { useFilteredBreeds } from '@/hooks/useFilteredBreeds';
import { Breed } from '@/types/types';
import React from 'react';
import { BreedList } from '../BreedList';
import { SearchForm } from '../SearchForm';

type Props = {
  breeds: Breed[];
};

export const BreedsContainer: React.FC<Props> = ({ breeds }) => {
  const {
    filteredBreeds,
    query,
    onHandleChange,
    toggle,
    onKeyPress,
  } = useFilteredBreeds(breeds);

  return (
    <section>
      <SearchForm
        onHandleFocus={toggle}
        value={query}
        onChange={onHandleChange}
        onKeyPress={onKeyPress}
      />
      <BreedList breeds={filteredBreeds} />
    </section>
  );
};
