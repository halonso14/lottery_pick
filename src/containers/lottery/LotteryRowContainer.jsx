/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React from 'react';
import LotteryRowComponent from '../../components/lottery/LotteryRowComponent';
import { generateLotteryEntry } from '../../lib/utils/LotteryPickGenerator';

const LotteryRowContainer = (props) => {
  const lotteryEntry = generateLotteryEntry();
  const { selectedNumbers, modifySelected, blockedNumbers, modifyBlocked } =
    props;

  return (
    <div>
      {lotteryEntry.map((entry) => (
        // eslint-disable-next-line react/jsx-key
        <LotteryRowComponent
          entry={entry}
          selectedNumbers={selectedNumbers}
          modifySelected={modifySelected}
          blockedNumbers={blockedNumbers}
          modifyBlocked={modifyBlocked}
        />
      ))}
    </div>
  );
};

LotteryRowContainer.propTypes = {
  selectedNumbers: PropTypes.arrayOf(PropTypes.number),
  modifySelected: PropTypes.func,
  blockedNumbers: PropTypes.arrayOf(PropTypes.number),
  modifyBlocked: PropTypes.func,
};

LotteryRowContainer.defaultProps = {
  selectedNumbers: [],
  modifySelected: undefined,
  blockedNumbers: [],
  modifyBlocked: undefined,
};

export default LotteryRowContainer;
