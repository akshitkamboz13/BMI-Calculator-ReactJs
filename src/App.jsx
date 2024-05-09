import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [weight, setWeight] = useState(50);
  const [height, setHeight] = useState(20);
  const [bmi, setBmi] = useState(0);

  React.useEffect(()=>{
    setBmi((weight / (height * height) * 10000).toFixed(2));
  }
  ,[weight, height]);

  const heightChange = (e)=>{
    setHeight(e);
  }
  const weightChange = (e)=>{
    setWeight(e);
  }

  return (
    <div className='container'>
      <div className='details'>
      <h1>BMI Calculator <hr /></h1>
      <p>Underweight: BMI less than 18.5</p>
      <p>Normal weight: BMI 18.5–24.9</p>
      <p>Overweight: BMI 25–29.9</p>
      <p>Obesity: BMI 30 or more</p>
      </div>
      <div className='details'>
        <h1>Calculate Your BMI <hr /></h1>
        <form>
          <lable for='weight'>Weight (kg): {weight}</lable><br />
          <input type="range" name="weight" id="weight" value={weight} onChange={(e)=>weightChange(e.target.value)} min={1} max={200}/><br /><br />
          <lable for='height'>Height (in meters.): {height}</lable><br />
          <input type="range" name="height" id="height" value={height} onChange={(e)=>heightChange(e.target.value)} min={15} max={230}/>
        </form>
        <div>
        <br />
        <br />
          Your BMI is: {bmi}
        </div>
      </div>
    </div>
  )
}

export default App
