'use client';

import { Breed } from '@/types/types';
import { useState } from 'react';

type RandomBreeds = Breed[];

export const useFilteredBreeds = (breeds: RandomBreeds) => {
  const [query, setQuery] = useState<string>('');
  const [focusValue, setFocusValue] = useState<boolean>(false);

  const onHandleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(target.value);
  };

  const toggle = () => {
    setFocusValue((value) => !value);
  };

  const onKeyPress = () => {
    if (focusValue) {
      return;
    }
    setFocusValue(true);
  };

  const filteredBreeds = breeds.filter(({ name }) => {
    const preparedQuery = query.trim().toLowerCase();

    return name.toLocaleLowerCase().includes(preparedQuery);
  });

  return {
    query,
    filteredBreeds,
    onHandleChange,
    focusValue,
    toggle,
    setQuery,
    onKeyPress,
  };
};
