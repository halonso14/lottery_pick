/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React from 'react';
import LotteryRowComponent from '../../components/lottery/LotteryRowComponent';
import { generateLotteryEntry } from '../../lib/utils/LotteryPickGenerator';

const LotteryRowContainer = (props) => {
  const lotteryEntry = generateLotteryEntry();
  const { selectedNumbers, blockedNumbers, modifySelectedAndBlocked } = props;

  return (
    <div>
      {lotteryEntry.map((entry) => (
        // eslint-disable-next-line react/jsx-key
        <LotteryRowComponent
          entry={entry}
          selectedNumbers={selectedNumbers}
          blockedNumbers={blockedNumbers}
          modifySelectedAndBlocked={modifySelectedAndBlocked}
        />
      ))}
    </div>
  );
};

LotteryRowContainer.propTypes = {
  selectedNumbers: PropTypes.arrayOf(PropTypes.number),
  blockedNumbers: PropTypes.arrayOf(PropTypes.number),
  modifySelectedAndBlocked: PropTypes.func,
};

LotteryRowContainer.defaultProps = {
  selectedNumbers: [],
  blockedNumbers: [],
  modifySelectedAndBlocked: undefined,
};

export default LotteryRowContainer;
