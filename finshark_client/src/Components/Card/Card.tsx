import React, { SyntheticEvent } from 'react'
import { CompanySearch } from '../../company'
import AddPortfolio from '../Portfolio/AddPortfolio'
import { Link } from 'react-router-dom'

type Props = {
  id: string
  searchResult: CompanySearch
  onPortfolioCreate: (e: SyntheticEvent) => void
}

const Card: React.FC<Props> = ({ id, searchResult, onPortfolioCreate }: Props): JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-between w-full p-6 bg-slate-900 rounded-lg md:flex-row' key={id} id={id}>
      <Link
        to={`/company/${searchResult.symbol}/company-profile`}
        className='font-bold text-center text-veryDarkViolet md:text-left'
      >
        {searchResult.name} ({searchResult.symbol})
      </Link>
      <p className='text-veryDarkBlue'>{searchResult.currency}</p>
      <p className='font-bold text-veryDarkBlue'>
        {searchResult.exchangeShortName} - {searchResult.stockExchange}
      </p>
      <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol} />
    </div>
  )
}
export default Card
