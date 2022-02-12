import React, { useState } from "react";
import CourseInput from "./components/CourseInput";
import CourseGoalList from "./components/CourseGoalList";
import "./App.css";
const dummyArr = [
  { text: "Do all exercises!", id: "g1" },
  { text: "Finish the course!", id: "g2" },
];
const App = () => {
  const [courseGoals, setCourseGoals] = useState(dummyArr);

  const addGoalHandler = (enteredText) => {
    // if (enteredText.text === "") {
    //   alert("📢 enter valid text");
    //   return;
    // }
    console.log(enteredText.text);
    setCourseGoals((preValue) => [...preValue, enteredText]);
  };
  const deleteHandlerApp = (goalId) =>
    setCourseGoals((preValue) => preValue.filter((goal) => goal.id !== goalId));
  // console.log(courseGoals);
  return (
    <div>
      <section id="goal-form" className="bg-red-800 ">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section className="goals">
        <CourseGoalList items={courseGoals} onDeleteItem={deleteHandlerApp} />
      </section>
    </div>
  );
};

export default App;
