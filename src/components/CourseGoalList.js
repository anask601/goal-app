import React from "react";
import "./CourseGoalList.css";

const CourseGoalList = ({ items, onDeleteItem }) => {
  // console.log(props);

  return (
    <>
      <ul className="goal-list">
        {items.map((goal) => (
          <li key={goal.id}>
            {goal.text}
            <button onClick={() => onDeleteItem(goal.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
