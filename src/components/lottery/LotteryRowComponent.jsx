import PropTypes from 'prop-types';
import React from 'react';
import LotteryNumberContainer from '../../containers/lottery/LotteryNumberContainer';
/* eslint-disable jsx-a11y/no-static-element-interactions */
function LotteryRowComponent(props) {
  const { entry, selectedNumbers, blockedNumbers, modifySelectedAndBlocked } =
    props;

  return (
    <box>
      <LotteryNumberContainer
        entry={entry}
        selectedNumbers={selectedNumbers}
        blockedNumbers={blockedNumbers}
        modifySelectedAndBlocked={modifySelectedAndBlocked}
      />
    </box>
  );
}

LotteryRowComponent.propTypes = {
  entry: PropTypes.arrayOf(PropTypes.number),
  selectedNumbers: PropTypes.arrayOf(PropTypes.number),
  blockedNumbers: PropTypes.arrayOf(PropTypes.number),
  modifySelectedAndBlocked: PropTypes.func,
};

LotteryRowComponent.defaultProps = {
  entry: [],
  selectedNumbers: [],
  blockedNumbers: [],
  modifySelectedAndBlocked: undefined,
};

export default LotteryRowComponent;
