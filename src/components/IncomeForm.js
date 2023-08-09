import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIncome } from '../redux/actions';

const IncomeForm = () => {
  const [incomeValue, setIncomeValue] = useState('');
  const dispatch = useDispatch();

  const handleIncomeChange = (e) => {
    setIncomeValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setIncome(parseFloat(incomeValue)));
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <label className="block mb-2 font-medium">Enter your income:</label>
      <input
        type="number"
        step="any"
        value={incomeValue}
        onChange={handleIncomeChange}
        className="border rounded p-2 w-full"
      />
      <button
        type="submit"
        className="mt-2 bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
      >
        Calculate
      </button>
    </form>
  );
};

export default IncomeForm;
