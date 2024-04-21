import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CompanyProfile } from '../../company'
import { getCompanyProfile } from '../../api'
import Sidebar from '../../Components/Sidebar/Sidebar'
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard'
import Tile from '../../Components/TIle/Tile'
import Spinner from '../../Components/Spinner/Spinner'
import CompFinder from '../../Components/CompFinder/CompFinder'
import TenKFinder from '../../Components/TenKFinder/TenKFinder'

interface Props {}
const CompanyPage = (props: Props) => {
  let { ticker } = useParams()
  const [company, setCompany] = useState<CompanyProfile>()

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!)
      setCompany(result?.data[0])
    }
    getProfileInit()
  }, [])

  return (
    <>
      {company ? (
        <div className='w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden text-black h-screen'>
          <Sidebar />

          <CompanyDashboard ticker={ticker!}>
            <Tile title='Company name' subTitle={company.companyName}></Tile>
            <Tile title='Price' subTitle={'$' + company.price.toString()}></Tile>
            <Tile title='DCF' subTitle={"$" + company.dcf.toString()}></Tile>
            <Tile title='Sector' subTitle={company.sector}></Tile>

            <CompFinder ticker={company.symbol} />
            <TenKFinder ticker={company.symbol} />
            <p className='bg-white p-6 mt-5 ml-4 shadow rounded-md text-sm text-gray-900'>{company.description}</p>
          </CompanyDashboard>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  )
}
export default CompanyPage
