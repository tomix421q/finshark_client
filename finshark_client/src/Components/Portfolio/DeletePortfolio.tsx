import { SyntheticEvent } from 'react'

interface Props {
  onPortfolioDelete: (e: SyntheticEvent) => void
  portfolioValue: string
}
const DeletePortfolio: React.FC<Props> = ({ onPortfolioDelete, portfolioValue }: Props): JSX.Element => {
  return (
    <div>
      <form className='' onSubmit={onPortfolioDelete}>
        <input readOnly={true} hidden={true} value={portfolioValue} />
        <button className='size-10 bg-red-400 rounded-md w-fit px-2'>Delete</button>
      </form>
    </div>
  )
}
export default DeletePortfolio
