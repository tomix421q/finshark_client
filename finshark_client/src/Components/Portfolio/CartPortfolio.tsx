import React, { SyntheticEvent } from 'react'
import DeletePortfolio from './DeletePortfolio'
import { Link } from 'react-router-dom'

interface Props {
  portfolioValue: string
  onPortfolioDelete: (e: SyntheticEvent) => void
}
const CartPortfolio: React.FC<Props> = ({ portfolioValue, onPortfolioDelete }: Props): JSX.Element => {
  return (
    <div className='border-2 border-green-400/40 w-[12.5rem] text-center p-4 rounded-md'>
      <span className='mr-1'>Porfolio:</span>
      <Link to={`/company/${portfolioValue}/company-profile`}>{portfolioValue}</Link>
      <DeletePortfolio onPortfolioDelete={onPortfolioDelete} portfolioValue={portfolioValue} />
    </div>
  )
}
export default CartPortfolio
