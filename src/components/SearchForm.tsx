import { Breed } from '@/types/types';
import React, { RefObject } from 'react';

type Props = {
  value: string;
  filteredBreeds: Breed[];
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onHandleFocus: () => void;
  focusValue: boolean;
  focusRemove: () => void;
  onKeyPress: () => void;
};

export const SearchForm: React.FC<Props> = ({
  value,
  onChange,
  onHandleFocus,
  onKeyPress,
}) => {
  return (
    <div className='flex justify-center mb-9'>
      <form className='w-[400px]' >
        <input
          placeholder='Find a dog or cat breed ...'
          className={
            'w-full text-line border p-2 border-secondary border-gray-600 border-solid rounded-lg'
          }
          value={value}
          onChange={onChange}
          type={'text'}
          onClick={onHandleFocus}
          onKeyDown={onKeyPress}
        />
      </form>
    </div>
  );
};
