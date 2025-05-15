import React, { useState } from 'react';
import './Calculator.css'; // Optional: for CSS styling

const Calculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');

    const calculate = () => {
        if (weight && height) {
            const heightInMeters = height / 100; // Convert height to meters
            const bmiValue = weight / (heightInMeters * heightInMeters);
            setBmi(bmiValue.toFixed(2)); // Set BMI value rounded to 2 decimal places

            // Determine BMI category
            if (bmiValue < 18.5) {
                setCategory('Underweight');
            } else if (bmiValue < 24.9) {
                setCategory('Normal weight');
            } else if (bmiValue < 29.9) {
                setCategory('Overweight');
            } else {
                setCategory('Obesity');
            }
        }
    };

    return (
        <div className="bmi-calculator-container">
            <h2>Calculator</h2>
            <div className="input-group">
                <label>
                    Weight (kg):
                    <input 
                        type="number" 
                        value={weight} 
                        onChange={(e) => setWeight(e.target.value)} 
                    />
                </label>
            </div>
            <div className="input-group">
                <label>
                    Height (cm):
                    <input 
                        type="number" 
                        value={height} 
                        onChange={(e) => setHeight(e.target.value)} 
                    />
                </label>
            </div>
            <button onClick={calculate}>Calculate BMI</button>
            {bmi && (
                <div className="result">
                    <h3>Your BMI: {bmi}</h3>
                    <h4>Category: {category}</h4>
                </div>
            )}
        </div>
    );
};

export default Calculator;
