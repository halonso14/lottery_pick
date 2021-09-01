import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import LotteryNumberComponent from '../../components/lottery/LotteryNumberComponent';
import { generateLotteryEntry } from '../../lib/utils/LotteryPickGenerator';
import { useLotteryPick } from '../../context/LotteryPickContext';

const NUMBERS = generateLotteryEntry();

const LotteryNumberContainer = (props) => {
  const { id, lotteryPick } = props;
  const { toggleNumber } = useLotteryPick();

  const onToggleNumber = useCallback(
    // eslint-disable-next-line no-shadow
    (id) => (event) => {
      toggleNumber(id, event.target.value);
    },
    [lotteryPick],
  );

  const validateStatus = useCallback(
    (number) => {
      if (lotteryPick.selectedNumbers.includes(`${number}`)) {
        return 'selected';
      }
      if (lotteryPick.blockedNumbers.includes(`${number}`)) {
        return 'blocked';
      }
      return 'none';
    },
    [lotteryPick],
  );

  return (
    <div>
      {NUMBERS.map((number) => (
        // eslint-disable-next-line react/jsx-key
        <LotteryNumberComponent
          number={number}
          status={validateStatus(number)}
          toggleNumber={onToggleNumber(id)}
        />
      ))}
      <div>{lotteryPick.selectedNumbers}</div>
      <div>{lotteryPick.blockedNumbers}</div>
    </div>
  );
};

LotteryNumberContainer.propTypes = {
  id: PropTypes.string,
  lotteryPick: PropTypes.shape({
    id: PropTypes.string,
    count: PropTypes.number,
    selectedNumbers: PropTypes.arrayOf(PropTypes.string),
    blockedNumbers: PropTypes.arrayOf(PropTypes.string),
  }),
};

LotteryNumberContainer.defaultProps = {
  id: '',
  lotteryPick: {},
};

export default LotteryNumberContainer;
