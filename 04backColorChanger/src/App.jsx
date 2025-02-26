import { useState } from "react";

function App() {
  const colors = ["red", "green", "yellow", "black", "orange", "violet"];

  const [color, setcolor] = useState("red");

  const capitalizeWord = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div
      className={`w-full h-screen duration-200 bg-${color}${
        color !== "black" ? "-500" : ""
      }`}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colors.map((color) => {
            return (
              <button
                key={color}
                onClick={() => setcolor(color)}
                className={`outline-none px-4 py-1 bg-${color}${
                  color !== "black" ? "-500" : ""
                } text-white rounded-full shadow-lg`}
              >
                {capitalizeWord(color)}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
