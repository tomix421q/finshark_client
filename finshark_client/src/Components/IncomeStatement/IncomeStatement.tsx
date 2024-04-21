import { useOutletContext } from 'react-router'
import { CompanyIncomeStatement } from '../../company'
import { useEffect, useState } from 'react'
import { getIncomeStatement } from '../../api'
import Table from '../Table/Table'
import Spinner from '../Spinner/Spinner'
import { formatLargeMonetaryNumber, formatRatio } from '../../helpers/NumberFormating'

interface Props {}

const configs = [
  {
    label: 'Date',
    render: (company: CompanyIncomeStatement) => company.date,
  },
  {
    label: 'Revenue',
    render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.revenue),
  },
  {
    label: 'Cost Of Revenue',
    render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.costOfRevenue),
  },
  {
    label: 'Depreciation',
    render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.depreciationAndAmortization),
  },
  {
    label: 'Operating Income',
    render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.operatingIncome),
  },
  {
    label: 'Income Before Taxes',
    render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.incomeBeforeTax),
  },
  {
    label: 'Net Income',
    render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.netIncome),
  },
  {
    label: 'Net Income Ratio',
    render: (company: CompanyIncomeStatement) => formatRatio(company.netIncomeRatio),
  },
  {
    label: 'Earnings Per Share',
    render: (company: CompanyIncomeStatement) => formatRatio(company.eps),
  },
  {
    label: 'Earnings Per Diluted',
    render: (company: CompanyIncomeStatement) => formatRatio(company.epsdiluted),
  },
  {
    label: 'Gross Profit Ratio',
    render: (company: CompanyIncomeStatement) => formatRatio(company.grossProfitRatio),
  },
  {
    label: 'Opearting Income Ratio',
    render: (company: CompanyIncomeStatement) => formatRatio(company.operatingIncomeRatio),
  },
  {
    label: 'Income Before Taxes Ratio',
    render: (company: CompanyIncomeStatement) => formatRatio(company.incomeBeforeTaxRatio),
  },
]
const IncomeStatement = (props: Props) => {
  const ticker = useOutletContext<string>()
  const [incomeStatement, setIncomeStatement] = useState<CompanyIncomeStatement[]>()

  useEffect(() => {
    const incomeStatementFetch = async () => {
      const result = await getIncomeStatement(ticker)
      setIncomeStatement(result!.data)
    }
    incomeStatementFetch()
  }, [])

  return (
    <div>
      {incomeStatement ? (
        <>
          <Table config={configs} data={incomeStatement} />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  )
}
export default IncomeStatement
