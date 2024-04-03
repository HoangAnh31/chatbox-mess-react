import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const randomFnc = () => Math.floor(Math.random() * 100);

const Game = ({ onAnswer }) => {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [proposedAnswer, setProposedAnswer] = useState(null);

  useEffect(() => {
    const arrayRandom = makeNewQuestion();
    setValue1(arrayRandom[0]);
    setValue2(arrayRandom[1]);
    setValue3(arrayRandom[2]);
    setProposedAnswer(arrayRandom[3]);
  }, []);

  const makeNewQuestion = () => {
    const value1 = randomFnc();
    const value2 = randomFnc();
    const value3 = randomFnc();
    const proposedAnswer =
      Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return [value1, value2, value3, proposedAnswer];
  };

  const handleAnswer = (boolAnswer) => {
    const compareValue = compareValueAnswer(
      value1,
      value2,
      value3,
      proposedAnswer
    );
    const answer = compareValue === boolAnswer;
    onAnswer(answer);
    refreshQuestion();
  };

  const refreshQuestion = () => {
    const newQuestion = makeNewQuestion();
    setValue1(newQuestion[0]);
    setValue2(newQuestion[1]);
    setValue3(newQuestion[2]);
    setProposedAnswer(newQuestion[3]);
  };

  const compareValueAnswer = (x, y, z, p) => {
    return x + y + z === p;
  };
  return (
    <>
      <div className="equation my-3">
        <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
      </div>
      <button
        className="text-center py-[1px] px-3 mr-3 rounded-md border border-blue-600"
        onClick={() => handleAnswer(true)}
      >
        True
      </button>
      <button
        className="text-center py-[1px] px-3 rounded-md border border-blue-600"
        onClick={() => handleAnswer(false)}
      >
        False
      </button>
    </>
  );
};

Game.propTypes = {
  onAnswer: PropTypes.func.isRequired,
};

export default Game;
