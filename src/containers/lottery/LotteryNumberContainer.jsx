import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import LotteryNumberComponent from '../../components/lottery/LotteryNumberComponent';

const LotteryNumberContainer = (props) => {
  const { state, number, toggle } = props;
  const toggleNumber = useCallback(() => {
    toggle(number);
  }, [state]);
  return (
    <LotteryNumberComponent
      state={state}
      number={number}
      toggleNumber={toggleNumber}
    />
  );
};

LotteryNumberContainer.propTypes = {
  state: PropTypes.string,
  number: PropTypes.number,
  toggle: PropTypes.func,
};

LotteryNumberContainer.defaultProps = {
  state: 'none',
  number: '0',
  toggle: undefined,
};

export default LotteryNumberContainer;
