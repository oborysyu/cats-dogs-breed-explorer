import React, { FC } from 'react';

interface Props {
  breedInfo: string;
  breedParam: string;
}

export const BreedInfoItem: FC<Props> = ({ breedParam, breedInfo }) => {
  return (
    <div
      className={
        'flex justify-between w-full mb-2 border-b border-b-primary pb-1'
      }
    >
      <p className={'text-line text-lg'}>{breedParam}</p>
      <p
        className={
          'text-right uppercase text-line font-bold tracking-[1.28px]'
        }
      >
        {breedInfo || 'No information'}
      </p>
    </div>
  );
};
