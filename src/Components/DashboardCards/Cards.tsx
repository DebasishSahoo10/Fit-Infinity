import React from "react";
import CardStyles from "./Cards.module.css";
import { useSelector } from "react-redux";
import { InitialState } from "../../Redux/redux.types";

export const Cards: React.FC = () => {
  const state = useSelector((state: InitialState) => state);
  const totalCaloriesBurned =
    state.exercises.reduce((acc, curr) => (acc += curr.caloriesBurned), 0) ?? 0;
  const totalCaloriesGoal =
    state.goals.reduce((acc, curr) => (acc += curr.calories), 0) ?? 0;
  const totalCaloriesConsumed =
    state.foods.reduce((acc, curr) => (acc += curr.calories), 0) ?? 0;
  return (
    <div className={CardStyles.dashboardCardsHolder}>
      <div className={CardStyles.dashboardCards}>
        <span role="img" aria-label="burning emoji">
          🧨
        </span>
        <p>{totalCaloriesBurned}</p>
        <p>Total Calories Burned</p>
      </div>
      <div className={CardStyles.dashboardCards}>
        <span role="img" aria-label="food emoji">
          🍜
        </span>
        <p>{totalCaloriesConsumed}</p>
        <p>Total Calories Consumed</p>
      </div>
      <div className={CardStyles.dashboardCards}>
        <span role="img" aria-label="goal emoji">
          🕸️
        </span>
        <p>{totalCaloriesGoal}</p>
        <p>Total Calories Goal</p>
      </div>
      <div className={CardStyles.dashboardCards}>
        <span role="img" aria-label="goal emoji">
          🤺
        </span>
        <p>
          {totalCaloriesGoal > totalCaloriesBurned
            ? totalCaloriesGoal - totalCaloriesBurned
            : "Already Achieved"}
        </p>
        <p>Remaining Calories to Goal</p>
      </div>
    </div>
  );
};
