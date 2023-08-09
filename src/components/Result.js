import React from 'react';
import { useSelector } from 'react-redux';

const Result = () => {
  const income = useSelector((state) => state.income);
  const tax = income * 0.2;

  return (
    <div className="mt-4">
      {income > 0 && (
        <p>
          Your income:  &#x20b9;{income}
          <br />
          Calculated tax:  &#x20b9;{tax}
        </p>
      )}
    </div>
  );
};

export default Result;
