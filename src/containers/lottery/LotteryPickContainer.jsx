import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import LotteryPickComponent from '../../components/lottery/LotteryPickComponent';
import Lottery from '../../lib/lottery/classes/Lottery';
import { generateID } from '../../lib/utils/LotteryPickGenerator';

const DEFAULT_LOTTERY_PICK = {
  id: generateID(),
  count: 1,
  selectedNumbers: [],
  blockedNumbers: [],
};

const LotteryPickContainer = () => {
  const [lotteryPickState, setLotteryPickState] = useState([
    DEFAULT_LOTTERY_PICK,
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
    [lotteryPickState, setLotteryPickState],
  );

  const onClickAdd = useCallback(() => {
    const newState = [...lotteryPickState, DEFAULT_LOTTERY_PICK];
    setLotteryPickState(newState);
  }, [lotteryPickState, setLotteryPickState]);

  const onClickSubmit = useCallback(() => {
    Object.values(lotteryPickState).forEach((lotteryPick) => {
      const { selectedNumbers, blockedNumbers } = lotteryPick;
      const lottery = new Lottery(selectedNumbers, blockedNumbers);
      lottery.pickLottery();
    });
  }, [lotteryPickState]);

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
      <button id="add" type="button" onClick={onClickAdd}>
        Add
      </button>
      <Link to="/result">
        <button id="submit" type="button" onClick={onClickSubmit}>
          Submit
        </button>
      </Link>
    </div>
  );
};

export default LotteryPickContainer;
