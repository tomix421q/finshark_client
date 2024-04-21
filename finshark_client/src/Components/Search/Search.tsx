import React, { ChangeEvent, SyntheticEvent } from 'react'

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void
  search: string | undefined
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void
}
const Search: React.FC<Props> = ({ onSearchSubmit, search, handleSearchChange }: Props): JSX.Element => {
  return (
    <div className='w-full  p-6'>
      <form className='text-center m-4' onSubmit={onSearchSubmit}>
        <h2 className='text-white font-bold w-fit mx-auto uppercase text-3xl '>Search</h2>
        <input
          className='p-4 rounded-md text-4xl bg-white text-black'
          value={search}
          onChange={handleSearchChange}
          placeholder='Exp. tesla'
        />
      </form>
    </div>
  )
}
export default Search
