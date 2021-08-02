import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import LotteryNumberComponent from '../../components/lottery/LotteryNumberComponent';
import { generateLotteryState } from '../../lib/utils/LotteryPickGenerator';

const LotteryNumberContainer = (props) => {
  const { entry, selectedNumbers, blockedNumbers, modifySelectedAndBlocked } =
    props;
  const [entryState, setEntryState] = useState(
    generateLotteryState(entry.length),
  );

  const toggleNumber = useCallback(
    (number) => (state) => {
      const tmpEntry = [...entryState];
      switch (state) {
        case 'selected':
          tmpEntry[(number % 10) - 1] = 'blocked';
          setEntryState(tmpEntry);
          blockedNumbers.push(number);
          modifySelectedAndBlocked(
            selectedNumbers.filter((selected) => selected !== number),
            blockedNumbers,
          );
          break;
        case 'blocked':
          tmpEntry[(number % 10) - 1] = 'none';
          setEntryState(tmpEntry);
          modifySelectedAndBlocked(
            selectedNumbers,
            blockedNumbers.filter((blocked) => blocked !== number),
          );
          break;
        case 'none':
        default:
          tmpEntry[(number % 10) - 1] = 'selected';
          setEntryState(tmpEntry);
          selectedNumbers.push(number);
          modifySelectedAndBlocked(selectedNumbers, blockedNumbers);
          break;
      }
    },
    [setEntryState, modifySelectedAndBlocked],
  );
  return (
    <div>
      {entry.map((number, index) => (
        // eslint-disable-next-line react/jsx-key
        <LotteryNumberComponent
          state={entryState[index]}
          number={number}
          toggleNumber={toggleNumber(number)}
        />
      ))}
    </div>
  );
};

LotteryNumberContainer.propTypes = {
  entry: PropTypes.arrayOf(PropTypes.number),
  selectedNumbers: PropTypes.arrayOf(PropTypes.number),
  blockedNumbers: PropTypes.arrayOf(PropTypes.number),
  modifySelectedAndBlocked: PropTypes.func,
};

LotteryNumberContainer.defaultProps = {
  entry: [],
  selectedNumbers: [],
  blockedNumbers: [],
  modifySelectedAndBlocked: undefined,
};

export default LotteryNumberContainer;
