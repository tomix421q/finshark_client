import React, { SyntheticEvent } from 'react'
import Card from '../Card/Card'
import { CompanySearch } from '../../company'
import { v4 as uuidv4 } from 'uuid'

interface Props {
  searchResults: CompanySearch[]
  onPortfolioCreate: (e: SyntheticEvent) => void
}
const CardList: React.FC<Props> = ({ searchResults, onPortfolioCreate }: Props): JSX.Element => {
  return (
    <div className='flex flex-wrap gap-8 justify-center'>
      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          return <Card id={result.symbol} key={uuidv4()} searchResult={result} onPortfolioCreate={onPortfolioCreate} />
        })
      ) : (
        <h1>No Data</h1>
      )}
    </div>
  )
}
export default CardList
