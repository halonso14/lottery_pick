import PropTypes from 'prop-types';
import React, { useCallback, useContext } from 'react';
import LotteryNumberComponent from '../../components/lottery/LotteryNumberComponent';
import { generateLotteryEntry } from '../../lib/utils/LotteryPickGenerator';
import LotteryPickContext from '../../context/LotteryPickContext';

const LotteryNumberContainer = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { id } = props;
  const entry = generateLotteryEntry();
  // eslint-disable-next-line no-unused-vars
  const { dispatch } = useContext(LotteryPickContext);
  const state = 'none';
  // eslint-disable-next-line no-unused-vars
  const getState = useCallback(() => {}, []);
  const toggleNumber = () => {};

  return (
    <div>
      {entry.map((number) => (
        // eslint-disable-next-line react/jsx-key
        <LotteryNumberComponent
          state={state}
          number={number}
          toggleNumber={toggleNumber}
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
