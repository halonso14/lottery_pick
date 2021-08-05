import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import LotteryPickComponent from '../../components/lottery/LotteryPickComponent';
import Lottery from '../../lib/lottery/classes/Lottery';
import { generateID } from '../../lib/utils/LotteryPickGenerator';

const LotteryPickContainer = () => {
  const createLotteryPick = useCallback(
    () => ({
      id: generateID(),
      count: 1,
      selectedNumbers: [],
      blockedNumbers: [],
    }),
    [],
  );

  const [lotteryPickState, setLotteryPickState] = useState([
    createLotteryPick(),
  ]);

  const modifyCount = useCallback(
    (id) => (count) => {
      const newLotteryPickState = lotteryPickState.map((lotteryPick) =>
        lotteryPick.id === id ? { ...lotteryPick, count } : lotteryPick,
      );
      setLotteryPickState(newLotteryPickState);
    },
    [],
  );

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
    [lotteryPickState],
  );

  const onClickAdd = useCallback(() => {
    const newState = [...lotteryPickState, createLotteryPick()];
    setLotteryPickState(newState);
  }, [lotteryPickState]);

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
