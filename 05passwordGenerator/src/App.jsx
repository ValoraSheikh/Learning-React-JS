import { useCallback, useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setlength] = useState(8);
  const [num, setnum] = useState(false);
  let [character, setchar] = useState(false);
  const [password, setpassword] = useState("");

  // useRef
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    if (num) str += "0123456789";
    if (character) str += "!@#$%^&*()_+-={}[]|:;'<>,.?/~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)

  }, [length, num, character, setpassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 9); // Only Select to this range
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, num, character, passwordGenerator])
  

  return (

    <>

<div className="bg-gray-600 w-full max-w-md mx-auto rounded-lg px-4 py-3 my-8  text-orange-500">

<h1
      className='text-4xl text-white font-bold text-center my-4'
      >Password Generator</h1>

        <div className="flex rounded-lg overflow-hidden mb-4">

        <input type="text" value={password} 
        className="outline-none w-full py-1 px-3"
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button
        className="outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0 hover:bg-blue-600 duration-200 ease-in-out"
        onClick={copyPasswordToClipBoard}
        >Copy</button>
      </div>


        <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={50}
          value={length}
          onChange={(e) => {setlength(e.target.value)}}
          className='cursor-pointer'
            />
            <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked = {num}
              id="numberInput"
              onChange={() => {
                setnum((prev) => !prev)
              }}
          />
          <label htmlFor="numberInput">Numbers</label>
          </div>


          <div className="flex items-center gap-x-1">
              <input
                  type="checkbox"
                  id="characterInput"
                  onChange={() => {
                    setchar((prev) => !prev)
                  }}
              />
            <label htmlFor="characterInput">Characters</label>
            </div>
          </div>  
        </div>

</>
  )
}

export default App;
