import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import LotteryNumberComponent from '../../components/lottery/LotteryNumberComponent';
import { generateLotteryEntry } from '../../lib/utils/LotteryPickGenerator';
import { useLotteryPick } from '../../context/LotteryPickContext';

const NUMBERS = generateLotteryEntry();

const LotteryNumberContainer = (props) => {
  const { id } = props;
  // eslint-disable-next-line no-unused-vars
  const { lotteryPickState, addLotteryPick } = useLotteryPick();
  // eslint-disable-next-line no-shadow
  const toggleNumber = useCallback((id) => () => {
    console.log('toggleNumber id', id);
  });

  return (
    <div>
      {NUMBERS.map((number) => (
        // eslint-disable-next-line react/jsx-key
        <LotteryNumberComponent
          number={number}
          toggleNumber={toggleNumber(id)}
        />
      ))}
    </div>
  );
};

LotteryNumberContainer.propTypes = {
  id: PropTypes.string,
};

LotteryNumberContainer.defaultProps = {
  id: '',
};

export default LotteryNumberContainer;
