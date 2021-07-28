import React, { useCallback, useState } from 'react';
import LotteryPickComponent from '../../components/lottery/LotteryPickComponent';

const SELECTED_NUMBERS = [];
const BLOCKED_NUMBERS = [];

const LotteryPickContainer = () => {
  const [lotteryPickState, setLotteryPickState] = useState([{id: '1', selectedNumbers: SELECTED_NUMBERS, blockedNumbers: BLOCKED_NUMBERS}]);
  const modifySelected = useCallback((id, selectedNumbers) => {
    setLotteryPickState(lotteryPickState.map(lotteryPick => (
      lotteryPick.id === id ? { ...lotteryPick, selectedNumbers } : lotteryPick
    )))
  })
  const modifyBlocked = useCallback((id, blockedNumbers) => {
    setLotteryPickState(lotteryPickState.map(lotteryPick => (
      lotteryPick.id === id ? { ...lotteryPick, blockedNumbers } : lotteryPick
    )))
  })
  return (
    <div>
      {
        // eslint-disable-next-line react/jsx-key
        lotteryPickState.map((lotteryPick) => (<LotteryPickComponent
            id={lotteryPick.id}
            selectedNumbers={lotteryPick.selectedNumbers}
            modifySelected={modifySelected}
            blockedNumbers={lotteryPick.blockedNumbers}
            modifyBlocked={modifyBlocked}
          />)
        )
      }
      <button id='add' type='button' onClick={undefined}>Add</button>
      <button id='submit' type='button' onClick={undefined}>Submit</button>
    </div>
  );
};

export default LotteryPickContainer;
