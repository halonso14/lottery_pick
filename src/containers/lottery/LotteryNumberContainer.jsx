import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import LotteryNumberComponent from '../../components/lottery/LotteryNumberComponent';
import { generateLotteryState } from '../../lib/utils/LotteryPickGenerator';

const LotteryNumberContainer = (props) => {
  const {
    entry,
    selectedNumbers,
    modifySelected,
    blockedNumbers,
    modifyBlocked,
  } = props;
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
          modifySelected(
            selectedNumbers.filter((selected) => selected !== number),
          );
          modifyBlocked(blockedNumbers.push(number));
          break;
        case 'blocked':
          tmpEntry[(number % 10) - 1] = 'none';
          setEntryState(tmpEntry);
          modifyBlocked(blockedNumbers.filter((blocked) => blocked !== number));
          break;
        case 'none':
        default:
          tmpEntry[(number % 10) - 1] = 'selected';
          setEntryState(tmpEntry);
          modifySelected(selectedNumbers.push(number));
          break;
      }
    },
    [],
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
  modifySelected: PropTypes.func,
  blockedNumbers: PropTypes.arrayOf(PropTypes.number),
  modifyBlocked: PropTypes.func,
};

LotteryNumberContainer.defaultProps = {
  entry: [],
  selectedNumbers: [],
  modifySelected: undefined,
  blockedNumbers: [],
  modifyBlocked: undefined,
};

export default LotteryNumberContainer;
