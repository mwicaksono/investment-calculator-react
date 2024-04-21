import { formatter } from "../util/investment.js";

const Result = ({ investment }) => {
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
                {investment.map((invest, key) => {
                    return <tr key={key}>
                        <td>{invest.year}</td>
                        <td>{formatter.format(invest.interest)}</td>
                        <td>{formatter.format(invest.interest)}</td>
                        <td>{formatter.format(invest.valueEndOfYear)}</td>
                        <td>{formatter.format(invest.annualInvestment)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default Result;