import { Breed } from '@/types/types';
import React, { FC } from 'react';
import { BreedCard } from './BreedCard';

type Props = {
  breeds: Breed[];
};

export const BreedList: FC<Props> = ({ breeds }) => {
  return (
    <div
      className={
        'grid gap-5 min-h-dvh sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      }
    >
      {breeds.map(({ id, breedId, imageUrl, petType, name }) => {
        return (
          <BreedCard
            petType={petType}
            imageUrl={imageUrl}
            breedId={breedId}
            name={name}
            key={id}
          />
        );
      })}
    </div>
  );
};
