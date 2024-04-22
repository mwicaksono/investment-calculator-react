import { calculateInvestmentResults, formatter } from "../util/investment.js";

const Result = ({ investment }) => {
    const investmentData = calculateInvestmentResults(investment);
    const initialInvesment = investmentData[0].valueEndOfYear - investmentData[0].interest - investmentData[0].annualInvestment;
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {investmentData.map((item, key) => {
                    const totalInterest = item.valueEndOfYear - item.annualInvestment * item.year - initialInvesment;
                    const totalInvestedCapital = item.valueEndOfYear - totalInterest
                    return <tr key={key}>
                        <td>{item.year}</td>
                        <td>{formatter.format(item.valueEndOfYear)}</td>
                        <td>{formatter.format(item.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalInvestedCapital)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default Result;