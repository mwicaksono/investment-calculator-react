import { useState } from "react";

import { calculateInvestmentResults } from "../util/investment.js";

const UserInput = ({ getInvestmentResult }) => {

    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleInput(newValue, type) {
        setUserInput((prevState) => {
            return {
                ...prevState,
                [type]: newValue
            }
        });

        getInvestmentResult(calculateInvestmentResults(userInput));
    }

    return (
        <div id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" value={userInput.initialInvestment} onChange={(event) => handleInput(event.target.value, 'initialInvestment')} required />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" value={userInput.annualInvestment} onChange={(event) => handleInput(event.target.value, 'annualInvestment')} required />
                </p>

            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" step="0.01" value={userInput.expectedReturn} onChange={(event) => handleInput(event.target.value, 'expectedReturn')} required />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={userInput.duration} onChange={(event) => handleInput(event.target.value, 'duration')} required />
                </p>
            </div>
        </div>
    )
}

export default UserInput;