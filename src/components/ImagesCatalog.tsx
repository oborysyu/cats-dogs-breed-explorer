import Link from 'next/link';
import React, { FC } from 'react';
import { ImageAsync } from './common/ImageAsync';
type Props = {
  images: { id: string; imageUrl: string }[];
  name: string;
};

export const ImagesCatalog: FC<Props> = ({ images, name }) => {
  return (
    <div className={'w-full border border-primary border-solid rounded-lg p-2'}>
      <h3
        className={'mb-4 text-lg uppercase font-bold font-bebas'}
      >{`Photo gallery with ${name}`}</h3>
      <div
        className={'h-[350px] w-full overflow-x-scroll p-4 flex flex-row gap-4 overflow-y-hidden'}
      >
        {images.length === 0 ? (
          <p>{'No images'}</p>
        ) : (
          images.map(({ id, imageUrl }) => (
            <Link
              className={'transition-shadow duration-300 hover:shadow-custom flex w-[auto]'}
              href={imageUrl}
              target={'_blank'}
              key={id}
            >
              <div className={'relative w-full h-[300px] mb-4 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3'}>
                <ImageAsync
                  objectfit='object-cover'
                  src={imageUrl}
                  fill={true}
                  alt={`photo of the ${name}`}
                />
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};
