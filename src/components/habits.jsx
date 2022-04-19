import React from "react";
import Habit from "./habit";
import AddForm from "./addForm";

export default function Habits(props) {
  return (
    <>
      {console.log("habits")}
      <AddForm onAdd={props.onAddForm} />
      <ul>
        {props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={props.onIncrement}
            onDecrement={props.onDecrement}
            onDelete={props.onDelete}
          />
        ))}
      </ul>
      <button className="habits-reset" onClick={props.onReset}>
        Reset All
      </button>
    </>
  );
}
