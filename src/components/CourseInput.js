import React, { useState } from "react";
import "./CourseInput.css";
import "./Button.css";

const CourseInput = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const changeText = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredText(event.target.value);
    // console.log(enteredText);
  };
  const [isValid, setIsValid] = useState(true);
  const onSubmitChange = (event) => {
    event.preventDefault();
    const usrInputs = { text: enteredText, id: Math.random().toString() };
    // console.log(usrInputs);
    if (enteredText.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(usrInputs);
    // console.log(event);
  };

  return (
    <>
      <form className="form-control" onSubmit={onSubmitChange}>
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{
            borderColor: !isValid ? "red" : "black",
            background: !isValid ? "Vermilion" : "transparent",
          }}
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
