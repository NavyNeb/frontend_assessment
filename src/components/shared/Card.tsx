import React from 'react';

type Props = {
    children: React.ReactNode
}

const Card = ({ children }: Props) => {
  return (
    <div className='bg-white rounded shadow-lg shadow-[#00000010] p-4 lg-desktop:pr-[35px] max-desktop:pr-[70px]' >{children}</div>
  )
}

export default Card