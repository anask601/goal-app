import React, { useState } from "react";
import "./CourseInput.css";

const CourseInput = () => {
  const [enteredText, setEnteredText] = useState("");
  const changeText = (event) => {
    setEnteredText(event.target.value);
    console.log(enteredText);
  };

  const onSumbitChange = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSumbitChange}>
        <div className="form-control">
          <label>Course Goal</label>
          <input type="text" onChange={changeText} />
        </div>
        {/* <Button type="submit">Add Goal</Button> */}
      </form>
    </div>
  );
};

export default CourseInput;
