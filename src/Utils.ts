import {
  loadExercises,
  loadGoals,
  loadFoods,
  AppDispatch
} from "./Redux/store";

import { ExerciseInput, FoodInput, GoalInput } from "./Pages/Util.types";
import { Dispatch, SetStateAction } from "react";

export const fetchInitialData = async (dispatch: AppDispatch) => {
  try {
    const exerciseResponse = await fetch(
      "https://fitness-api.devkahl.repl.co/exercises"
    );
    const allExercises = await exerciseResponse.json();
    dispatch(loadExercises(allExercises.data));
    const goalResponse = await fetch(
      "https://fitness-api.devkahl.repl.co/goals"
    );
    const allGoals = await goalResponse.json();
    dispatch(loadGoals(allGoals.data));
    const foodResponse = await fetch(
      "https://fitness-api.devkahl.repl.co/foods"
    );
    const allFoods = await foodResponse.json();
    dispatch(loadFoods(allFoods.data));
  } catch (error) {
    console.log(error);
    return new Error(`${error}`);
  }
};

export const deleteExercise = async (exID: string, dispatch: AppDispatch) => {
  try {
    const responseDelete = await fetch(
      `https://fitness-api.devkahl.repl.co/exercises/${exID}`,
      {
        method: "DELETE"
      }
    );
    const dataAfterDeleting = await responseDelete.json();
    dispatch(loadExercises(dataAfterDeleting.data));
  } catch (error) {
    return new Error(`${error}`);
  }
};

export const addExercise = async (
  exOBJ: ExerciseInput,
  dispatch: AppDispatch,
  setOpenDialog: Dispatch<SetStateAction<boolean>>
) => {
  try {
    const responseAdd = await fetch(
      "https://fitness-api.devkahl.repl.co/exercises",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(exOBJ)
      }
    );
    const dataAfterAdding = await responseAdd.json();
    dispatch(loadExercises(dataAfterAdding.data));
    setOpenDialog(false);
  } catch (error) {
    return new Error(`${error}`);
  }
};

export const deleteFood = async (foodID: string, dispatch: AppDispatch) => {
  try {
    const responseDelete = await fetch(
      `https://fitness-api.devkahl.repl.co/foods/${foodID}`,
      {
        method: "DELETE"
      }
    );
    const dataAfterDeleting = await responseDelete.json();
    dispatch(loadFoods(dataAfterDeleting.data));
  } catch (error) {
    return new Error(`${error}`);
  }
};

export const addFood = async (
  foodOBJ: FoodInput,
  dispatch: AppDispatch,
  setOpenDialog: Dispatch<SetStateAction<boolean>>
) => {
  try {
    const responseAdd = await fetch(
      "https://fitness-api.devkahl.repl.co/foods",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(foodOBJ)
      }
    );
    const dataAfterAdding = await responseAdd.json();
    dispatch(loadFoods(dataAfterAdding.data));
    setOpenDialog(false);
  } catch (error) {
    return new Error(`${error}`);
  }
};

export const deleteGoal = async (goalID: string, dispatch: AppDispatch) => {
  try {
    const responseDelete = await fetch(
      `https://fitness-api.devkahl.repl.co/goals/${goalID}`,
      {
        method: "DELETE"
      }
    );
    const dataAfterDeleting = await responseDelete.json();
    dispatch(loadGoals(dataAfterDeleting.data));
  } catch (error) {
    return new Error(`${error}`);
  }
};

export const addGoal = async (
  goalOBJ: GoalInput,
  dispatch: AppDispatch,
  setOpenDialog: Dispatch<SetStateAction<boolean>>
) => {
  try {
    const responseAdd = await fetch(
      "https://fitness-api.devkahl.repl.co/goals",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(goalOBJ)
      }
    );
    const dataAfterAdding = await responseAdd.json();
    dispatch(loadGoals(dataAfterAdding.data));
    setOpenDialog(false);
  } catch (error) {
    return new Error(`${error}`);
  }
};
