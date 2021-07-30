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

  const getIndex = useCallback((number) => {
    if (number % 10) {
      return (number % 10) - 1;
    }
    return 9;
  }, []);

  const toggleNumber = useCallback(
    (number) => (state) => {
      const tmpEntry = [...entryState];
      switch (state) {
        case 'selected':
          tmpEntry[getIndex(number)] = 'blocked';
          setEntryState(tmpEntry);
          blockedNumbers.push(number);
          modifySelectedAndBlocked(
            selectedNumbers.filter((selected) => selected !== number),
            blockedNumbers,
          );
          break;
        case 'blocked':
          tmpEntry[getIndex(number)] = 'none';
          setEntryState(tmpEntry);
          modifySelectedAndBlocked(
            selectedNumbers,
            blockedNumbers.filter((blocked) => blocked !== number),
          );
          break;
        case 'none':
        default:
          tmpEntry[getIndex(number)] = 'selected';
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
