import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Balle balle</h1>
      <AddTodo/>
      <Todo/>
    </>
  )
}

export default App
