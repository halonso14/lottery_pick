import React, { useCallback } from 'react';
import Lottery from '../../lib/lottery/classes/Lottery';
import { useLotteryPick } from '../../context/LotteryPickContext';
import LotteryDrawComponent from '../../components/lottery/LotteryDrawComponent';

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
    </div>
  );
};

export default LotteryDrawContainer;
