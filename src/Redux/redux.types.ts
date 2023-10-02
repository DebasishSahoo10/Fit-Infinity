export type Exercises = {
  _id: string;
  exerciseName: string;
  duration: number;
  caloriesBurned: number;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  isDeletable: boolean;
};
export type Goals = {
  _id: string;
  __v: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string;
  targetDate: Date;
  calories: number;
  status: "In Progress" | "Achieved" | "Abandoned";
  isDeletable: boolean;
};
export type Foods = {
  _id: string;
  __v: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  calories: number;
  protein: number;
  carbohydrates: number;
  fat: number;
  isDeletable: boolean;
};
export type InitialState = {
  exercises: Exercises[];
  goals: Goals[];
  foods: Foods[];
};
export type Action = LOAD_EXERCISES | LOAD_GOALS | LOAD_FOODS;
export type LOAD_EXERCISES = {
  type: "LOAD_EXERCISES";
  payload: Exercises[];
};
export type LOAD_GOALS = {
  type: "LOAD_GOALS";
  payload: Goals[];
};
export type LOAD_FOODS = {
  type: "LOAD_FOODS";
  payload: Foods[];
};
