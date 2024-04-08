import React from 'react'
import Card from '../Card/Card'
import { CompanySearch } from '../../company'
import { v4 as uuidv4 } from 'uuid'

interface Props {
  searchResults: CompanySearch[]
}
const CardList: React.FC<Props> = ({ searchResults }: Props): JSX.Element => {
  return (
    <div className='flex flex-wrap gap-8 justify-center'>
      
      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          return <Card id={result.symbol} key={uuidv4()} searchResult={result} />
        })
      ) : (
        <h1>No Data</h1>
      )}
    </div>
  )
}
export default CardList
