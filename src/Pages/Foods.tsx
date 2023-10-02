import { useSelector, useDispatch } from "react-redux";
import { InitialState } from "../Redux/redux.types";
import CardsStyles from "./Cards.module.css";
import { useState } from "react";
import { deleteFood, addFood } from "../Utils";

export const Foods = () => {
  const [foodInputs, setFoodInput] = useState({
    name: "Default Name",
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0,
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
          <p>Add New Food</p>
        </div>
        {state.foods.map((food) => (
          <li key={food._id} className={CardsStyles.li}>
            <div className={CardsStyles.detailsHolder}>
              <p>{food.name}</p>
              <p>{food.calories} Calories</p>
              <p>{food.carbohydrates} Carbohydrates</p>
              <p>{food.protein} Protein</p>
              <p>{food.fat} Fat</p>
            </div>
            <div className={CardsStyles.emojiHolder}>
              <span role="img" aria-label="goal emoji">
                🍜
              </span>
            </div>
            {food.isDeletable && (
              <div
                className={CardsStyles.removeButton}
                onClick={() => deleteFood(food._id, dispatch)}
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
        <label htmlFor="">Food Name :</label>
        <input
          type="text"
          onChange={(e) =>
            setFoodInput((prev) => ({
              ...prev,
              name: e.target.value
            }))
          }
        />
        <label htmlFor="">Calories Consumed :</label>
        <input
          type="number"
          onChange={(e) =>
            setFoodInput((prev) => ({
              ...prev,
              calories: Number(e.target.value)
            }))
          }
        />
        <label htmlFor="">Carbohydrates :</label>
        <input
          type="number"
          onChange={(e) =>
            setFoodInput((prev) => ({
              ...prev,
              carbohydrates: Number(e.target.value)
            }))
          }
        />
        <label htmlFor="">Fat :</label>
        <input
          type="number"
          onChange={(e) =>
            setFoodInput((prev) => ({
              ...prev,
              fat: Number(e.target.value)
            }))
          }
        />
        <label htmlFor="">Protein :</label>
        <input
          type="number"
          onChange={(e) =>
            setFoodInput((prev) => ({
              ...prev,
              protein: Number(e.target.value)
            }))
          }
        />

        <button onClick={() => addFood(foodInputs, dispatch, setOpenDialog)}>
          Submit
        </button>
        <button onClick={() => setOpenDialog(false)}>Close</button>
      </dialog>
    </div>
  );
};
