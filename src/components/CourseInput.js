import React, { useState } from "react";
import "./CourseInput.css";
import "./Button.css";

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
      <form className="form-control" onSubmit={onSubmitChange}>
        <label>Course Goal</label>
        <input
          type="text"
          className="form-control input"
          onChange={changeText}
        />
        <button className="button" type="submit">
          Add Goal
        </button>
      </form>
    </>
  );
};

export default CourseInput;
