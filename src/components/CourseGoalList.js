import React from "react";
import "./CourseGoalList.css";
import "./Button.css";

const CourseGoalList = ({ items, onDeleteItem }) => {
  // console.log(props);

  return (
    <>
      <ul className="goal-list">
        {items.map((goal) => (
          <li className="goal-item" key={goal.id}>
            {goal.text}
            <button className="button-1" onClick={() => onDeleteItem(goal.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
