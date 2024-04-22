import { useState } from "react";
import Header from "./components/Header"
import Result from "./components/Result"
import UserInput from "./components/UserInput"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration >= 1;

  function handleInput(newValue, type) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [type]: parseInt(newValue)
      }
    });

  }

  return (
    <main>
      <Header />
      <UserInput userInput={userInput} handleInput={handleInput} />
      {!inputIsValid && <p className="center">Please duration more than zero.</p>}
      {inputIsValid && <Result investment={userInput} />}
    </main>
  )
}

export default App
