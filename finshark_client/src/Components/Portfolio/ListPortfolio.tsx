import React, { SyntheticEvent } from 'react'
import CartPortfolio from './CartPortfolio'
import { v4 as uuidv4 } from 'uuid'

interface Props {
  portfolioValue: string[]
  onPortfolioDelete: (e: SyntheticEvent) => void
}
const ListPortfolio: React.FC<Props> = ({ portfolioValue, onPortfolioDelete }: Props): JSX.Element => {
  return (
    <section id='portfolio'>
      <h2 className='mb-3 mt-3 text-3xl font-semibold text-center md:text-4xl'>My Portfolio</h2>
      <div className='relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 mb-5 md:px-6 md:space-y-0 md:space-x-7 md:flex-row'>
        <>
          {portfolioValue.length > 0 ? (
            portfolioValue.map((portfolioValue) => {
              return <CartPortfolio portfolioValue={portfolioValue} onPortfolioDelete={onPortfolioDelete} />
            })
          ) : (
            <h3 className='mb-3 mt-3 text-xl font-semibold md:text-lg mx-auto text-white/30'>Your portfolio is empty.</h3>
          )}
        </>
      </div>
    </section>
  )
}
export default ListPortfolio
