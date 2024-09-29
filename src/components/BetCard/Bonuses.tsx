type Props = {
    bet: number,
    get: number
}

const Bonuses = ({ bet, get }: Props) => {
  return (
    <section className="w-full flex flex-col items-center large-tablet:items-start lg-desktop:items-center" >
        <h2 className='text-xl font-montserrat font-semibold' >Bonus</h2>
        <div className='inline-block tablet:inline-flex tablet:gap-x-3 lg-desktop:inline-block lg-desktop:gap-x-0' >
            <p className="text-[28px] leading-[34px] font-normal lg-desktop:truncate">{`Bet £${bet}`}</p>
            <p className="text-[28px] leading-[34px] font-normal lg-desktop:truncate">{`Get £${get}`}</p>
        </div>
    </section>
  )
}

export default Bonuses