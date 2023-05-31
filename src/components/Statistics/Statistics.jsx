import React from 'react';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  removeStatistics,
}) => {
  return (
    <>
      <ul>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {total}</p>
        </li>
        <li>
          <p>Positive feedback: {positivePercentage}%</p>
        </li>
      </ul>
      <button onClick={removeStatistics}>Remove Statistics</button>
    </>
  );
};

export default Statistics;
