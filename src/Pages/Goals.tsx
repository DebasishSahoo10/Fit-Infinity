import { useSelector, useDispatch } from "react-redux";
import { InitialState } from "../Redux/redux.types";
import CardsStyles from "./Cards.module.css";
import { useState } from "react";
import { addGoal, deleteGoal } from "../Utils";
import { GoalInput } from "./Util.types";

export const Goals = () => {
  const [goalInputs, setGoalInput] = useState<GoalInput>({
    name: "Default Name",
    description: "This is a default description.",
    targetDate: new Date(),
    calories: 0,
    status: "In Progress",
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
          <p>Add New Goal</p>
        </div>
        {state.goals.map((goal) => (
          <li key={goal._id} className={CardsStyles.li}>
            <div className={CardsStyles.detailsHolder}>
              <p>{goal.name}</p>
              <p>{goal.description}</p>
              <p>{goal.calories} Calories to be Burned</p>
              <p>
                Target Date : {new Date(goal.targetDate).toLocaleDateString()}
              </p>
              <p>Status : {goal.status}</p>
            </div>
            {goal.isDeletable && (
              <div
                className={CardsStyles.removeButton}
                onClick={() => deleteGoal(goal._id, dispatch)}
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
        <label htmlFor="">Goal Name :</label>
        <input
          type="text"
          onChange={(e) =>
            setGoalInput((prev) => ({
              ...prev,
              naame: e.target.value
            }))
          }
        />
        <label htmlFor="">Description :</label>
        <input
          type="text"
          onChange={(e) =>
            setGoalInput((prev) => ({
              ...prev,
              description: e.target.value
            }))
          }
        />
        <label htmlFor="">Calories Goal :</label>
        <input
          type="number"
          onChange={(e) =>
            setGoalInput((prev) => ({
              ...prev,
              calories: Number(e.target.value)
            }))
          }
        />
        <label htmlFor="">Target Date :</label>
        <input
          type="date"
          onChange={(e) =>
            setGoalInput((prev) => ({
              ...prev,
              targetDate: new Date(e.target.value)
            }))
          }
        />
        <label htmlFor="">Status of Goal :</label>
        <select
          name="status"
          onChange={(e) =>
            setGoalInput((prev) => ({
              ...prev,
              status: e.target.value as GoalInput["status"]
            }))
          }
        >
          <option value="In Progress">In Progress</option>
          <option value="Abandoned">Abandoned</option>
          <option value="Achieved">Achieved</option>
        </select>
        <button onClick={() => addGoal(goalInputs, dispatch, setOpenDialog)}>
          Submit
        </button>
        <button onClick={() => setOpenDialog(false)}>Close</button>
      </dialog>
    </div>
  );
};
