import React, { useState } from 'react'

const App = () => {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    if (!height || !weight) {
      setResult("Please enter both height and weight");
      return;
    }

    const bmi = (weight / (height / 100) * (height / 100)).toFixed(1);
    let category = "";
    if (bmi < 18.5) category = "underweight";
    else if (bmi < 25) category = "normal";
    else if (bmi < 30) category = "overweight";
    else category = "obese";

    setResult(`Your BMI is ${bmi} : You Are ${category}`)
  }

  return (
    <div className='container'>
      <h1>BMI Calculator</h1>
      <label htmlFor="height">Height (cm)</label>
      <input type="number" id='height' placeholder='170' value={height} onChange={(e) => setHeight(e.target.value)}/>

      <label htmlFor="weight">Weight (kg)</label>
      <input type="number" id='weight' placeholder='80' value={weight} onChange={(e) => setWeight(e.target.value)}/>

      <button onClick={calculate}>Calculate</button>

      <div className="result">{result}</div>
    </div>
  )
}

export default App