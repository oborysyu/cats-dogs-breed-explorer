import { PropsWithChildren } from 'react';

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={'content-center my-4 p-8 bg-white'}>
      {children}
    </div>
  );
};
