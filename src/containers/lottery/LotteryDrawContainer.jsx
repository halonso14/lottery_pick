import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import LotteryDrawComponent from '../../components/lottery/LotteryDrawComponent';
import { useLotteryPick } from '../../context/LotteryPickContext';
import Lottery from '../../lib/lottery/classes/Lottery';

const LotteryDrawContainer = () => {
  const { lotteryPickState } = useLotteryPick();

  const getLotteryDrawResult = useCallback((lotteryPick) => {
    const lottery = new Lottery(
      lotteryPick.selectedNumbers,
      lotteryPick.blockedNumbers,
    );
    lottery.drawLottery();
    return lottery;
  }, []);

  return (
    <div>
      {lotteryPickState.map((lotteryPick) => (
        // eslint-disable-next-line react/jsx-key
        <div>
          <h2>{lotteryPick.id}</h2>
          <LotteryDrawComponent
            lotteryPick={getLotteryDrawResult(lotteryPick)}
          />
        </div>
      ))}
      <Link to="/">
        <button id="submit" type="button">
          Back
        </button>
      </Link>
    </div>
  );
};

export default LotteryDrawContainer;
