// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BmrTdeeCalculator from "./components/BmrTdeeCalculator";
import MealPlan from "./components/MealPlan";
import NutritionInfo from "./components/NutritionInfo";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <Router basename="/health-app">
      {" "}
      {/* Set the basename to match your repository name */}
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          {/* Ensure you have a Home component or route */}
          <Route path="/bmr-tdee" element={<BmrTdeeCalculator />} />
          <Route path="/meal-plan" element={<MealPlan />} />
          <Route path="/nutrition-info" element={<NutritionInfo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
