// src/components/NutritionInfo.tsx
import React from "react";
import "./NutritionInfo.css"; // นำเข้า CSS

const NutritionInfo: React.FC = () => {
  return (
    <div className="nutrition-info">
      <h2>Nutritional Information</h2>
      <p>This page will display nutritional information for various foods.</p>
      {/* แสดงข้อมูลโภชนาการ */}
    </div>
  );
};

export default NutritionInfo;
