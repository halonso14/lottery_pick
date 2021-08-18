import React, { useCallback } from 'react';
// import LotteryNumberComponent from '../../components/lottery/LotteryNumberComponent';
// import { generateLotteryEntry } from '../../lib/utils/LotteryPickGenerator';
// import LotteryPickContext from '../../context/LotteryPickContext';

const LotteryNumberContainer = () => {
  // const entry = generateLotteryEntry();
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line no-unused-vars
  const getState = useCallback(() => {}, []);

  return (
    <div>
      {/* {entry.map((number) => (
        // eslint-disable-next-line react/jsx-key
        <LotteryNumberComponent
          state={getState()}
          number={number}
          toggleNumber={toggleNumber}
        />
      ))} */}
    </div>
  );
};

export default LotteryNumberContainer;
