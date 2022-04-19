import React, { memo, useState } from "react";

const Habit = memo((props) => {
  const [count, setCount] = useState(0);
  const habit = props.habit;

  const handleIncrement = () => {
    props.onIncrement(habit);
  };

  const handleDecrement = () => {
    props.onDecrement(habit);
  };

  const handleDelete = () => {
    props.onDelete(habit);
  };

  return (
    <>
      {console.log("habit")}
      <li className="habit">
        <span className="habit-name">{habit.name}</span>
        <span className="habit-count">{habit.count}</span>
        <button
          className="habit-button habit-increase"
          onClick={handleIncrement}
        >
          <i className="fa-solid fa-square-plus"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={handleDecrement}
        >
          <i className="fa-solid fa-square-minus"></i>
        </button>
        <button className="habit-button habit-delete" onClick={handleDelete}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </li>
    </>
  );
});

export default Habit;
