import React, { useCallback, useState } from 'react';
import LotteryPickComponent from '../../components/lottery/LotteryPickComponent';
import { generateID } from '../../lib/utils/LotteryPickGenerator';

const COUNT = 1;
const SELECTED_NUMBERS = [];
const BLOCKED_NUMBERS = [];

const LotteryPickContainer = () => {
  const createLotteryPick = useCallback(
    () => ({
      id: generateID(),
      count: COUNT,
      selectedNumbers: SELECTED_NUMBERS,
      blockedNumbers: BLOCKED_NUMBERS,
    }),
    [],
  );

  const [lotteryPickState, setLotteryPickState] = useState([
    createLotteryPick(),
  ]);

  const modifyCount = useCallback((id) => (count) => {
    const newLotteryPickState = lotteryPickState.map((lotteryPick) =>
      lotteryPick.id === id ? { ...lotteryPick, count } : lotteryPick,
    );
    setLotteryPickState(newLotteryPickState);
  });

  const modifySelectedAndBlocked = useCallback(
    (id) => (selectedNumbers, blockedNumbers) => {
      setLotteryPickState(
        lotteryPickState.map((lotteryPick) =>
          lotteryPick.id === id
            ? { ...lotteryPick, selectedNumbers, blockedNumbers }
            : lotteryPick,
        ),
      );
    },
  );

  return (
    <div>
      {lotteryPickState.map((lotteryPick) => (
        // eslint-disable-next-line react/jsx-key
        <div>
          <h2>{lotteryPick.id}</h2>
          <LotteryPickComponent
            count={lotteryPick.count}
            modifyCount={modifyCount(lotteryPick.id)}
            selectedNumbers={lotteryPick.selectedNumbers}
            blockedNumbers={lotteryPick.blockedNumbers}
            modifySelectedAndBlocked={modifySelectedAndBlocked(lotteryPick.id)}
          />
        </div>
      ))}
      <button id="add" type="button" onClick={undefined}>
        Add
      </button>
      <button id="submit" type="button" onClick={undefined}>
        Submit
      </button>
    </div>
  );
};

export default LotteryPickContainer;
