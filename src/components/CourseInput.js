import React, { useState } from "react";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const changeText = (event) => {
    setEnteredText(event.target.value);
    // console.log(enteredText);
  };

  const onSubmitChange = (event) => {
    event.preventDefault();
    const usrInputs = { text: enteredText, id: Math.random().toString() };
    // console.log(usrInputs);
    props.onAddGoal(usrInputs);
    // console.log(event);
  };

  return (
    <>
      <form onSubmit={onSubmitChange}>
        <label>Course Goal</label>
        <input type="text" onChange={changeText} />
        <button type="submit">Add Goal</button>
      </form>
    </>
  );
};

export default CourseInput;
