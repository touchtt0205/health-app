// src/components/BmrTdeeCalculator.tsx
import React, { useState } from "react";
import "./BmrTdeeCalculator.css"; // เพิ่มนำเข้า CSS

const BmrTdeeCalculator: React.FC = () => {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [age, setAge] = useState<number>(0);
  const [gender, setGender] = useState<string>("male");
  const [activityLevel, setActivityLevel] = useState<number>(1.2);
  const [bmr, setBmr] = useState<number | null>(null);
  const [tdee, setTdee] = useState<number | null>(null);

  const calculateBMR = () => {
    let bmrValue;
    if (gender === "male") {
      bmrValue = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmrValue = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    setBmr(bmrValue);
    setTdee(bmrValue * activityLevel);
  };

  return (
    <div className="bmr-calculator">
      <h2>BMR & TDEE Calculator</h2>
      <input
        type="number"
        placeholder="Weight (kg)"
        onChange={(e) => setWeight(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Height (cm)"
        onChange={(e) => setHeight(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Age"
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <select onChange={(e) => setGender(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <select onChange={(e) => setActivityLevel(Number(e.target.value))}>
        <option value={1.2}>Sedentary (little or no exercise)</option>
        <option value={1.375}>
          Lightly active (light exercise/sports 1-3 days/week)
        </option>
        <option value={1.55}>
          Moderately active (moderate exercise/sports 3-5 days/week)
        </option>
        <option value={1.725}>
          Very active (hard exercise/sports 6-7 days a week)
        </option>
        <option value={1.9}>
          Super active (very hard exercise/physical job)
        </option>
      </select>
      <button onClick={calculateBMR}>Calculate</button>
      {bmr !== null && (
        <div>
          <h3>BMR: {bmr.toFixed(2)} kcal</h3>
          <h3>TDEE: {tdee!.toFixed(2)} kcal</h3>
        </div>
      )}
    </div>
  );
};

export default BmrTdeeCalculator;
