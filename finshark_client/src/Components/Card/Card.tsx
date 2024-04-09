import React, { SyntheticEvent } from 'react'
import { CompanySearch } from '../../company'
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio'

type Props = {
  id: string
  searchResult: CompanySearch
  onPortfolioCreate: (e: SyntheticEvent) => void
}

const Card: React.FC<Props> = ({ id, searchResult, onPortfolioCreate }: Props): JSX.Element => {
  return (
    <div className='w-[21.875rem] h-[28.125rem] flex flex-col align-middle text-center p-[3.125rem] rounded-lg overflow-hidden shadow-black/30 shadow-xl items-center hover:ring-2 ease-out ring-white/50 duration-75'>
      <span className='text-sm text-gray-500'>{id}</span>
      
      <div className='size-[12.5rem] m-1'>
        <h2 className='font-bold'>
          {searchResult.name} ({searchResult.symbol})
        </h2>
        <p className='uppercase font-semibold'>{searchResult.currency}$</p>
      </div>
      <p className='uppercase font-light'>
        {searchResult.exchangeShortName} - {searchResult.stockExchange}
      </p>
      <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol} />
    </div>
  )
}
export default Card
