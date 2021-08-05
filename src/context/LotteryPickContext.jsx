import PropTypes from 'prop-types';
import React, { createContext, useReducer } from 'react';
import produce from 'immer';
import { generateLottryPick } from '../lib/utils/LotteryPickGenerator';

const initState = [generateLottryPick()];

const LotteryPickContext = createContext(initState);

const reducer = produce((draft, action) => {
  const lotteryPick = draft.find((pick) => pick.id === action.payload.id);
  let index;
  switch (action.type) {
    case 'SELECT':
      lotteryPick.selectedNumbers.push(action.payload.number);
      break;
    case 'BLOCK':
      index = lotteryPick.selectedNumbers.findIndex(action.payload.number);
      lotteryPick.selectedNumbers.splice(index, 1);
      lotteryPick.blockedNumbers.push(action.payload.number);
      break;
    case 'UNBLOCK':
      index = lotteryPick.blockedNumbers.findIndex(action.payload.number);
      lotteryPick.blockedNumbers.splice(index, 1);
      break;
    default:
      break;
  }
});

export const LotteryPickProvider = ({ children }) => {
  const [lotteryPickState, dispatch] = useReducer(reducer, initState);
  return (
    <LotteryPickContext.Provider value={{ lotteryPickState, dispatch }}>
      {children}
    </LotteryPickContext.Provider>
  );
};

LotteryPickProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LotteryPickContext;
