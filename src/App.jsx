import { useState } from "react";
import Header from "./components/Header"
import Result from "./components/Result"
import UserInput from "./components/UserInput"
import { calculateInvestmentResults } from "./util/investment";

function App() {
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

  }

  return (
    <main>
      <Header />
      <UserInput userInput={userInput} handleInput={handleInput} />
      <Result investment={calculateInvestmentResults(userInput)} />
    </main>
  )
}

export default App
