import React, { ChangeEvent, SyntheticEvent } from 'react'

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void
  search: string | undefined
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void
}
const Search: React.FC<Props> = ({ onSearchSubmit, search, handleSearchChange }: Props): JSX.Element => {
  return (
    <>
      <form className='text-center m-4' onSubmit={onSearchSubmit}>
        <input className='p-2' value={search} onChange={handleSearchChange} />
      </form>
    </>
  )
}
export default Search
