export const SET_INCOME = 'SET_INCOME';

export const setIncome = (income) => {
  return {
    type: SET_INCOME,
    payload: income,
  };
};
