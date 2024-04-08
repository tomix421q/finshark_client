import React from 'react'
import { CompanySearch } from '../../company'

type Props = {
  id: string
  searchResult: CompanySearch
}

const Card: React.FC<Props> = ({ id, searchResult }: Props): JSX.Element => {
  return (
    <div className='w-[21.875rem] h-[28.125rem] flex flex-col align-middle text-center p-[3.125rem] rounded-lg overflow-hidden shadow-black/30 shadow-xl items-center hover:ring-2 ease-out ring-white/50 duration-75'>
      <span className='text-sm text-gray-500'>{id}</span>
      <img
        className='size-[12.5rem] rounded-full aspect-square m-2'
        src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='Image'
      />
      <div className='size-[12.5rem] m-1'>
        <h2 className='font-bold'>
          {searchResult.name} ({searchResult.symbol})
        </h2>
        <p className='uppercase font-semibold'>{searchResult.currency}$</p>
      </div>
      <p className='uppercase font-light'>
        {searchResult.exchangeShortName} - {searchResult.stockExchange}
      </p>
    </div>
  )
}
export default Card
