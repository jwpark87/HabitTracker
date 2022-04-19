import React, { useState } from "react";
import "./app.css";
import Habits from "./components/habits";
import NavBar from "./components/navBar";

function App() {
  const [habits, setHabits] = useState([
    {
      id: 1,
      name: "Reading",
      count: 0,
    },
    {
      id: 2,
      name: "Running",
      count: 0,
    },
    {
      id: 3,
      name: "Coding",
      count: 0,
    },
  ]);

  const handleIncrement = (event) => {
    const newHabits = [...habits];
    const habitIndex = newHabits.indexOf(event);
    newHabits[habitIndex].count++;
    setHabits(newHabits);
  };

  const handleDecrement = (event) => {
    const newHabits = [...habits];
    const habitIndex = newHabits.indexOf(event);
    newHabits[habitIndex].count <= 0
      ? (newHabits[habitIndex].count = 0)
      : newHabits[habitIndex].count--;
    setHabits(newHabits);
  };

  const handleDelete = (event) => {
    const newHabits = habits.filter((item) => item.id !== event.id);
    setHabits(newHabits);
  };

  const handleAddForm = (name) => {
    const newHabits = [
      ...habits,
      {
        id: Date.now(),
        name,
        count: 0,
      },
    ];
    setHabits(newHabits);
  };

  const handleReset = () => {
    const newHabits = habits.map((habit) => {
      habit.count = 0;
      return habit;
    });
    setHabits(newHabits);
  };

  return (
    <>
      {console.log("app")}
      <NavBar totalCount={habits.filter((item) => item.count > 0).length} />
      <Habits
        habits={habits}
        onAddForm={handleAddForm}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onReset={handleReset}
      />
    </>
  );
}

export default App;
