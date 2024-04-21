import { Link } from 'react-router-dom'
import { CompanyTenK } from '../../company'

type Props = {
  tenK: CompanyTenK
}
const TenKFinderItem = ({ tenK }: Props) => {
  const fillingData = new Date(tenK.fillingDate).getFullYear()
  return (
    <Link
      reloadDocument
      to={tenK.finalLink}
      type='button'
      className='inline-flex items-center p-4 text-md text-white bg-lightGreen rounded-md mx-2'
    >
      10K - {tenK.symbol} - {fillingData}
    </Link>
  )
}
export default TenKFinderItem
