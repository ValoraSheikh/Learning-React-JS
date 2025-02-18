import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("hotPink")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setcolor("red")}
          className="outline-none px-4 py-1 bg-red-500 text-white rounded-full shadow-lg"
          >
            Red
          </button>
          
          <button onClick={() => setcolor("green")}
          className="outline-none px-4 py-1 bg-green-500 text-white rounded-full shadow-lg"
          >
            Green
          </button>
          <button onClick={() => setcolor("yellow")}
          className="outline-none px-4 py-1 bg-yellow-500 text-white rounded-full shadow-lg"
          >
            Yellow
          </button>
          <button onClick={() => setcolor("Black")}
          className="outline-none px-4 py-1 bg-black text-white rounded-full shadow-lg"
          >
            Black
          </button>
          <button onClick={() => setcolor("Orange")}
          className="outline-none px-4 py-1 bg-orange-500 text-white rounded-full shadow-lg"
          >
            Orange
          </button>
          <button onClick={() => setcolor("violet")}
          className="outline-none px-4 py-1 bg-violet-500 text-white rounded-full shadow-lg"
          >
            Violet
          </button>

        </div>
      </div>
    </div>
  )
}

export default App
