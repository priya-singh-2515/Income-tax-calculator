import { SET_INCOME } from './actions';

const initialState = {
  income: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INCOME:
      return {
        ...state,
        income: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
