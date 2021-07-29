import PropTypes from 'prop-types';
import React from 'react';
import LotteryNumberContainer from '../../containers/lottery/LotteryNumberContainer';
/* eslint-disable jsx-a11y/no-static-element-interactions */
function LotteryRowComponent(props) {
  const {
    entry,
    selectedNumbers,
    modifySelected,
    blockedNumbers,
    modifyBlocked,
  } = props;

  return (
    <LotteryNumberContainer
      entry={entry}
      selectedNumbers={selectedNumbers}
      modifySelected={modifySelected}
      blockedNumbers={blockedNumbers}
      modifyBlocked={modifyBlocked}
    />
  );
}

LotteryRowComponent.propTypes = {
  entry: PropTypes.arrayOf(PropTypes.number),
  selectedNumbers: PropTypes.arrayOf(PropTypes.number),
  modifySelected: PropTypes.func,
  blockedNumbers: PropTypes.arrayOf(PropTypes.number),
  modifyBlocked: PropTypes.func,
};

LotteryRowComponent.defaultProps = {
  entry: [],
  selectedNumbers: [],
  modifySelected: undefined,
  blockedNumbers: [],
  modifyBlocked: undefined,
};

export default LotteryRowComponent;
