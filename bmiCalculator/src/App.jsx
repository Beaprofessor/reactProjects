import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(80)

  function onWeightChange(event){
      setWeight(event.target.value)
  }

  function onHeightChange(event){
    setHeight(event.target.value)
  }

  const output = useMemo(()=>{
    const calcHeight = height/100

    return (weight/(calcHeight*calcHeight)).toFixed(1)
  },[weight,height])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
      <h1 className="text-4xl font-bold mb-8">BMI Calculator</h1>
      
      <div className="input-section bg-white p-4 rounded-lg shadow-lg mb-6 w-full max-w-sm">
        <p className="slider-output text-black text-xl font-semibold mb-4">
          Weight: {weight}kg
        </p>
        <input
          type="range"
          className="input-slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          step="1"
          min="40"
          max="150"
          onChange={onWeightChange}
        />

        <p className="slider-output text-black text-xl font-semibold mt-6 mb-4">
          Height: {height}cm
        </p>
        <input
          type="range"
          className="input-slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          step="1"
          min="40"
          max="200"
          onChange={onHeightChange}
        />
      </div>

      <div className="output-section text-center bg-white p-4 rounded-lg shadow-lg w-full max-w-sm">
        <p className="text-xl font-semibold text-black">Your BMI is</p>
        <p className="output text-5xl font-bold mt-2 text-indigo-600">{output}</p>
      </div>
    </div>
  );
}

export default App;
