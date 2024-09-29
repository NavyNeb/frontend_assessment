import star from "../../assets/star.svg";

type Props = {
    name: string,
    count?: number
}

const Rating: React.FC<Props> = ({ name, count = 5 }) => {
  return (
    <section 
        className="w-full  flex flex-col items-center large-tablet:items-start tablet:items-center" 
        aria-label={`Rating of ${count} out of 5 for ${name}`}
    >
        <h1 className='text-xl text-center font-montserrat font-normal underline mb-3 truncate'>{name}</h1>
        <ul className="inline-flex flex-row items-center justify-between list-none gap-1.5" >
            {[...Array(count)].map((_, index) => (
                <li key={index}>
                    <img className="w-[30px] h-[30px] object-contain" src={star} />
                </li>
            ))}
        </ul>
    </section>
  )
}

export default Rating;