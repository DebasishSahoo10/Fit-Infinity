import { useSelector, useDispatch } from "react-redux";
import { InitialState } from "../Redux/redux.types";
import CardsStyles from "./Cards.module.css";
import { deleteExercise, addExercise } from "../Utils";
import { useState } from "react";

export const Exercises = () => {
  const [exerciseInputs, setExerciseInput] = useState({
    exerciseName: "Default Name",
    duration: 0,
    caloriesBurned: 0,
    isDeletable: true
  });
  const state = useSelector((state: InitialState) => state);
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  return (
    <div>
      <ul>
        <div
          className={CardsStyles.addButtonHolder}
          onClick={() => setOpenDialog(true)}
        >
          <p>Add New Exercise</p>
        </div>
        {state.exercises.map((exercise) => (
          <li key={exercise._id} className={CardsStyles.li}>
            <div className={CardsStyles.detailsHolder}>
              <p>{exercise.exerciseName}</p>
              <p>{exercise.duration} Minutes Done</p>
              <p>{exercise.caloriesBurned} Calories Burned</p>
            </div>
            <div className={CardsStyles.emojiHolder}>
              <span role="img" aria-label="muscle emoji">
                💪🏻
              </span>
            </div>
            {exercise.isDeletable && (
              <div
                className={CardsStyles.removeButton}
                onClick={() => deleteExercise(exercise._id, dispatch)}
              >
                <span role="img" aria-label="delete emoji">
                  🗑️
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>
      <dialog
        open={openDialog}
        className={CardsStyles.dialog}
        style={{ display: openDialog ? "flex" : "none" }}
      >
        <label htmlFor="">Exercise Name :</label>
        <input
          type="text"
          onChange={(e) =>
            setExerciseInput((prev) => ({
              ...prev,
              exerciseName: e.target.value
            }))
          }
        />
        <label htmlFor="">Duration in Minutes :</label>
        <input
          type="number"
          onChange={(e) =>
            setExerciseInput((prev) => ({
              ...prev,
              duration: Number(e.target.value)
            }))
          }
        />
        <label htmlFor="">Calories Burned :</label>
        <input
          type="number"
          onChange={(e) =>
            setExerciseInput((prev) => ({
              ...prev,
              caloriesBurned: Number(e.target.value)
            }))
          }
        />
        <button
          onClick={() => addExercise(exerciseInputs, dispatch, setOpenDialog)}
        >
          Submit
        </button>
        <button onClick={() => setOpenDialog(false)}>Close</button>
      </dialog>
    </div>
  );
};
