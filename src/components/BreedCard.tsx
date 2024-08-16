'use client';
import { Breed } from '@/types/types';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { FC, memo } from 'react';
import { ImageAsync } from './common/ImageAsync';
import { CatIcon, DogIcon } from './common/icons';

type Props = Omit<Breed, 'id'>;

export const BreedCard: FC<Props> = memo(function BreedCard({ name, imageUrl, breedId, petType }) {
  const searchParams = useSearchParams();
  const setSearchParams = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('type', petType);

    return params.toString();
  };

  return (
    <Link
      onClick={() => {
        setSearchParams();
      }}
      href={`pet/${breedId}?${setSearchParams()}`}
      target='_blank'
    >
      <article
        className={
          'bg-gray-400 border w-full border-gray-600 border-solid rounded-lg pb-4'
        }
      >
        <div className={'relative w-full h-[300px] mb-4'}>
          <ImageAsync
            src={imageUrl}
            fill={true}
            alt={name}
            objectfit="object-cover"
          />
        </div>
        <div className={'flex align-middle w-full'}>
          <div className={"ml-4"}>{petType === "cat" ? <CatIcon /> : <DogIcon />}</div>
          <h2 className={'text-center text-line text-2xl w-full mr-12'}>{name}</h2>
        </div>
      </article>
    </Link>
  );
});
