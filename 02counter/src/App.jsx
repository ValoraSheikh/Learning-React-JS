import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)

  function changeValue() {

    if (counter < 20) {
      console.log(`Change hai bhai`, counter);
      setCounter(counter + 1)
    }
  }

  function subtractValue() {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }
  return (
    <>
    <h1>React JS series</h1>
    <h2>Counter : {counter}</h2>
    <button onClick={changeValue}>Add value </button>
    <button onClick={subtractValue}>Subtract value </button>
    </>
  )
}

export default App
