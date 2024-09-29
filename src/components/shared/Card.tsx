import React from 'react';

type Props = {
    children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
  return (
    <article className='bg-white rounded shadow-lg shadow-[#00000010] p-4 lg-desktop:pr-[35px] max-desktop:pr-[70px]'>
      {children}
    </article>
  );
}

export default Card;
