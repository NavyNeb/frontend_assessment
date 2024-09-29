import React from 'react'

type Props = {
    title: string;
    onClick: React.EventHandler<React.MouseEvent>;
}

const Button = ({ onClick, title }: Props) => {
  return (
    <button onClick={onClick} className='h-[64px] w-full bg-buttonBgColor text-white text-xl font-montserrat font-bold py-2 px-4 rounded-[10px] lg-desktop:min-w-[190px] max-desktop:min-w-[306px] ' >
        {title}
    </button>
  )
}

export default Button