import RatioList from '../../Components/RatioList/RatioList'
import Table from '../../Components/Table/Table'
import { testIncomeStatementData } from '../../Components/Table/testData'
import { CompanyKeyMetrics } from '../../company'

interface Props {}
const tableConfig = [
  {
    label: 'Market Cap',
    render: (company: CompanyKeyMetrics) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
]

const DesignPage = (props: Props) => {
  return (
    <>
      <h1>Finshark design page</h1>
      <h2>This is Finshark's design page</h2>
      <RatioList data={testIncomeStatementData} config={tableConfig} />
      <Table data={testIncomeStatementData} config={tableConfig} />
    </>
  )
}
export default DesignPage
