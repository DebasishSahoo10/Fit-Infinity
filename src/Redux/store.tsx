import { createStore } from "redux";
import {
  InitialState,
  Exercises,
  Goals,
  Foods,
  Action,
  LOAD_EXERCISES,
  LOAD_GOALS,
  LOAD_FOODS
} from "./redux.types";

const initialState: InitialState = {
  exercises: [],
  goals: [],
  foods: []
};

const globalReducer = (state = initialState, action: Action): InitialState => {
  switch (action.type) {
    case "LOAD_EXERCISES":
      return { ...state, exercises: action.payload };
    case "LOAD_GOALS":
      return { ...state, goals: action.payload };
    case "LOAD_FOODS":
      return { ...state, foods: action.payload };
    default:
      return state;
  }
};

export const loadExercises = (payload: Exercises[]): LOAD_EXERCISES => ({
  type: "LOAD_EXERCISES",
  payload: payload
});
export const loadGoals = (payload: Goals[]): LOAD_GOALS => ({
  type: "LOAD_GOALS",
  payload: payload
});
export const loadFoods = (payload: Foods[]): LOAD_FOODS => ({
  type: "LOAD_FOODS",
  payload: payload
});
export const store = createStore(globalReducer);
export type AppDispatch = typeof store.dispatch;
