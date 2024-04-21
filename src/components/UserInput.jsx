import { useState } from "react";

import { calculateInvestmentResults } from "../util/investment.js";

const UserInput = ({ getInvestmentResult }) => {
    const [investment, setInvestment] = useState(0);
    const [annualInvestment, setAnnualInvestment] = useState(0);
    const [expectedReturn, setExpectedReturn] = useState(0);
    const [duration, setDuration] = useState(1);

    function handleInput(event, type) {

        const result = event.target.value !== '' ? event.target.value : 0;

        if (result < 1) {
            alert('Please input more than 1')
            return;
        }
        const investmentResult = {
            initialInvestment: investment,
            annualInvestment: annualInvestment,
            expectedReturn: expectedReturn,
            duration: duration,
        }

        if (type === 'investment') {
            setInvestment(parseInt(result));
            investmentResult.initialInvestment = parseInt(result);
        } else if (type === 'annualInvestment') {
            setAnnualInvestment(parseInt(result));
            investmentResult.annualInvestment = parseInt(result);
        } else if (type === 'expectedReturn') {
            setExpectedReturn(parseInt(result));
            investmentResult.expectedReturn = parseInt(result);
        } else if (type === 'duration') {
            setDuration(parseInt(result));
            investmentResult.duration = parseInt(result);
        }

        getInvestmentResult(calculateInvestmentResults(investmentResult));
    }



    return (
        <div id="user-input">
            <div className="input-group">
                <div className="input">
                    <label>Initial Investment</label>
                    <input type="number" value={investment} onChange={() => handleInput(event, 'investment')} />

                    <label>Expected Return</label>
                    <input type="number" value={expectedReturn} onChange={() => handleInput(event, 'expectedReturn')} />
                </div>
                <div className="input">
                    <label>Annual Investment</label>
                    <input type="number" value={annualInvestment} onChange={() => handleInput(event, 'annualInvestment')} />
                    <label>Duration</label>
                    <input type="number" value={duration} onChange={() => handleInput(event, 'duration')} />
                </div>
            </div>
        </div>
    )
}

export default UserInput;