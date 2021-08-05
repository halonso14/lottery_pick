import PropTypes from 'prop-types';
import React, { useCallback, useContext } from 'react';
import LotteryNumberComponent from '../../components/lottery/LotteryNumberComponent';
import { generateLotteryEntry } from '../../lib/utils/LotteryPickGenerator';
import LotteryPickContext from '../../context/LotteryPickContext';

const LotteryNumberContainer = (props) => {
  const { id } = props;
  const entry = generateLotteryEntry();
  // eslint-disable-next-line no-unused-vars
  const { dispatch } = useContext(LotteryPickContext);
  // eslint-disable-next-line no-unused-vars
  const getState = useCallback(() => {}, []);
  const toggleNumber = (state, number) => {
    dispatch({
      type: state,
      payload: {
        id,
        number,
      },
    });
  };

  return (
    <div>
      {entry.map((number) => (
        // eslint-disable-next-line react/jsx-key
        <LotteryNumberComponent
          state={getState()}
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
