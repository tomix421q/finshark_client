import React, { ChangeEvent, SyntheticEvent } from 'react'

interface Props {
  onClick: (e: SyntheticEvent) => void
  search: string | undefined
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}
const Search: React.FC<Props> = ({ onClick, search, handleChange }: Props): JSX.Element => {
  return (
    <div className='w-full text-center m-4'>
      <input
        className='p-2 border border-gray-700 hover:border-white rounded-md'
        value={search}
        onChange={(e) => handleChange(e)}
        placeholder='Search'
      />
      <button className='p-2 border border-white/30 hover:border-white rounded-md' onClick={(e) => onClick(e)}>
        Button
      </button>
    </div>
  )
}
export default Search
