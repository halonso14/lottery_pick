import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import LotteryNumberContainer from './LotteryNumberContainer';
import Lottery from '../../lib/lottery/classes/Lottery';
import { useLotteryPick } from '../../context/LotteryPickContext';

const LotteryPickContainer = () => {
  const { lotteryPickState, addLotteryPick } = useLotteryPick();

  const onClickAdd = useCallback(() => {
    addLotteryPick();
  }, []);

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
          <LotteryNumberContainer id={lotteryPick.id} />
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
