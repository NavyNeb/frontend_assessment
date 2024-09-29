import React from 'react';

type Props = {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  bgColor?: string;  // Optional prop for background color if needed for customization
}

const Button: React.FC<Props> = ({ onClick, title, bgColor }) => {
  return (
    <button
      onClick={onClick}
      className={`h-[64px] w-full ${bgColor || 'bg-buttonBgColor'} text-white text-xl font-montserrat font-bold py-2 px-4 rounded-[10px] lg-desktop:min-w-[190px] max-desktop:min-w-[306px]`}
      aria-label={title}
    >
      {title}
    </button>
  );
}

export default Button;
