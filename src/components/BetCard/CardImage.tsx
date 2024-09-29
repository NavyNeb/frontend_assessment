type Props = {
  src: string; 
  alt?: string;  // Optional alt text for accessibility
}

const CardImage: React.FC<Props> = ({ src, alt = "Card Image" }) => {
  return (
    <div className='flex-1 w-full bg-cardImgBgColor flex items-center justify-center large-tablet:py-4 lg-desktop:py-0 lg-desktop:max-w-[360px]' >
        <img className='h-[133px] w-[133px] object-contain object-center' src={src} alt={alt} />
    </div>
  )
}

export default CardImage