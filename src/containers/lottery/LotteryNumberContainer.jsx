import PropTypes from 'prop-types';
import React from 'react';
import LotteryNumberComponent from '../../components/lottery/LotteryNumberComponent';
import { generateLotteryEntry } from '../../lib/utils/LotteryPickGenerator';

const LotteryNumberContainer = (props) => {
  const { id } = props;
  const entry = generateLotteryEntry();

  return (
    <div>
      {entry.map((number) => (
        // eslint-disable-next-line react/jsx-key
        <LotteryNumberComponent id={id} number={number} />
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
