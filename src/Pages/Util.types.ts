export type FoodInput = {
  name: string;
  calories: number;
  protein: number;
  carbohydrates: number;
  fat: number;
  isDeletable: boolean;
};
export type GoalInput = {
  name: string;
  description: string;
  targetDate: Date;
  calories: number;
  status: "In Progress" | "Achieved" | "Abandoned";
  isDeletable: boolean;
};
export type ExerciseInput = {
  exerciseName: string;
  duration: number;
  caloriesBurned: number;
  isDeletable: boolean;
};
