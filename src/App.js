import React, { useState } from "react";
import CourseInput from "./components/CourseInput";
import "./App.css";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={"string"} />
      </section>
    </div>
  );
};

export default App;
