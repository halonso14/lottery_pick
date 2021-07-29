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
    setLotteryPickState(
      lotteryPickState.map((lotteryPick) =>
        lotteryPick.id === id ? { ...lotteryPick, count } : lotteryPick,
      ),
    );
  });

  const modifySelected = useCallback((id) => (selectedNumbers) => {
    setLotteryPickState(
      lotteryPickState.map((lotteryPick) =>
        lotteryPick.id === id
          ? { ...lotteryPick, selectedNumbers }
          : lotteryPick,
      ),
    );
  });

  const modifyBlocked = useCallback((id) => (blockedNumbers) => {
    setLotteryPickState(
      lotteryPickState.map((lotteryPick) =>
        lotteryPick.id === id
          ? { ...lotteryPick, blockedNumbers }
          : lotteryPick,
      ),
    );
  });
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
            modifySelected={modifySelected(lotteryPick.id)}
            blockedNumbers={lotteryPick.blockedNumbers}
            modifyBlocked={modifyBlocked(lotteryPick.id)}
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
