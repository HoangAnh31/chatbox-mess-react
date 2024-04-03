import React from "react";

const Score = (props) => {
  return (
    <p className="text mt-3">
      Your Score: {props.numCorrect}/{props.numQuestions}
    </p>
  );
};

export default Score;
