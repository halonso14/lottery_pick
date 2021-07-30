import PropTypes from 'prop-types';
import React from 'react';
import LotteryRowContainer from '../../containers/lottery/LotteryRowContainer';
/* eslint-disable jsx-a11y/no-static-element-interactions */
function LotteryPickComponent(props) {
  const {
    count,
    // eslint-disable-next-line no-unused-vars
    modifyCount,
    selectedNumbers,
    blockedNumbers,
    modifySelectedAndBlocked,
  } = props;

  return (
    <div>
      <LotteryRowContainer
        selectedNumbers={selectedNumbers}
        blockedNumbers={blockedNumbers}
        modifySelectedAndBlocked={modifySelectedAndBlocked}
      />
      <p>count: {count}</p>
      <p>selected: {selectedNumbers}</p>
      <p>blocked: {blockedNumbers}</p>
    </div>
  );
}

LotteryPickComponent.propTypes = {
  count: PropTypes.number,
  modifyCount: PropTypes.func,
  selectedNumbers: PropTypes.arrayOf(PropTypes.number),
  blockedNumbers: PropTypes.arrayOf(PropTypes.number),
  modifySelectedAndBlocked: PropTypes.func,
};

LotteryPickComponent.defaultProps = {
  count: 1,
  modifyCount: undefined,
  selectedNumbers: [],
  blockedNumbers: [],
  modifySelectedAndBlocked: undefined,
};

export default LotteryPickComponent;
