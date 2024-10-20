// src/components/MealPlan.tsx
import React from "react";
import "./MealPlan.css"; // นำเข้า CSS

const MealPlan: React.FC = () => {
  return (
    <div className="meal-plan">
      <h2>Meal Plan</h2>
      <p>This page will display a meal plan based on TDEE.</p>
      {/* แสดงตารางอาหารที่สร้างจาก TDEE ที่คำนวณได้ */}
    </div>
  );
};

export default MealPlan;
