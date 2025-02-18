import { useState } from 'react'
import Card  from "./components/card";
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let arr = [1, 2, 3];

  return (
    <>
      <h1 className='text-orange-600 text text-5xl mb-2 bg-gray-800 p-10 rounded-md font-bold border-orange-800 '>Tailwind test</h1>
      <Card username='Azlan' age={10} price="$ 10" />
      <Card username='Aman' age={20} price="$ 15" />
    </>
  )
}

export default App
