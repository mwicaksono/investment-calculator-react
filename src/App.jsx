import { useState } from "react";
import Header from "./components/Header"
import Result from "./components/Result"
import UserInput from "./components/UserInput"

function App() {
  const [investmentResult, setInvestmentResult] = useState([]);


  function handleInvestmentResult(value) {
    setInvestmentResult(value);
  }
  return (
    <main>
      <Header />
      <UserInput getInvestmentResult={handleInvestmentResult} />
      <Result investment={investmentResult} />
    </main>
  )
}

export default App
