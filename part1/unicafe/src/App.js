import { useState } from "react"
import Buttons from "./Buttons"
import Header from "./Header"
import Statistics from "./Statistics"


const App = () => {
  const [ feedback, setFeedback ] = useState({
    good: 0, 
    neutral: 0,
    bad: 0
  })




  return(
    <>
      <Header message="give feedback"/>
      <Buttons feedback={feedback} setFeedback={setFeedback} />
      <Header message="statistics" />
      <Statistics feedback={feedback} />
    </>
  )
}


export default App