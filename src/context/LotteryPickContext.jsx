import React, { createContext, useContext, useMemo, useReducer } from 'react';
import produce from 'immer';
import { generateLottryPick } from '../lib/utils/LotteryPickGenerator';

const initState = [generateLottryPick()];

const LotteryPickContext = createContext();

const lotteryPickReducer = produce((draft, action) => {
  let index;
  let lotteryPick;
  switch (action.type) {
    case 'ADD':
      draft.push(generateLottryPick());
      break;
    case 'SELECT':
      lotteryPick = draft.find((pick) => pick.id === action.payload.id);
      lotteryPick.selectedNumbers.push(action.payload.number);
      break;
    case 'BLOCK':
      lotteryPick = draft.find((pick) => pick.id === action.payload.id);
      index = lotteryPick.selectedNumbers.findIndex(action.payload.number);
      lotteryPick.selectedNumbers.splice(index, 1);
      lotteryPick.blockedNumbers.push(action.payload.number);
      break;
    case 'UNBLOCK':
      lotteryPick = draft.find((pick) => pick.id === action.payload.id);
      index = lotteryPick.blockedNumbers.findIndex(action.payload.number);
      lotteryPick.blockedNumbers.splice(index, 1);
      break;
    default:
      break;
  }
});

export function useLotteryPick() {
  const context = useContext(LotteryPickContext);
  if (!context) {
    throw new Error(`useLotteryPick must be used within a LotteryPickProvider`);
  }
  const [lotteryPickState, dispatch] = context;

  const addLotteryPick = () => dispatch({ type: 'ADD' });
  const selectNumber = (id, number) => dispatch({ type: 'SELECT', id, number });
  const blockNumber = (id, number) => dispatch({ type: 'BLOCK', id, number });
  const unblockNumber = (id, number) => dispatch({ type: 'BLOCK', id, number });

  return {
    lotteryPickState,
    addLotteryPick,
    selectNumber,
    blockNumber,
    unblockNumber,
  };
}

function LotteryPickProvider(props) {
  const [lotteryPickState, dispatch] = useReducer(
    lotteryPickReducer,
    initState,
  );
  const value = useMemo(() => [lotteryPickState, dispatch], [lotteryPickState]);
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <LotteryPickContext.Provider value={value} {...props} />;
}

export default LotteryPickProvider;
