import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import LotteryRowContainer from '../../containers/lottery/LotteryRowContainer';
/* eslint-disable jsx-a11y/no-static-element-interactions */
function LotteryPickComponent(props) {
  const {
    count,
    modifyCount,
    selectedNumbers,
    modifySelected,
    blockedNumbers,
    modifyBlocked,
  } = props;

  useEffect(() => {
    // TODO remove
    modifyCount(count);
    modifySelected(selectedNumbers);
    modifyBlocked(modifyBlocked);
  }, []);

  return (
    <div>
      <LotteryRowContainer
        selectedNumbers={selectedNumbers}
        modifySelected={modifySelected}
        blockedNumbers={blockedNumbers}
        modifyBlocked={modifyBlocked}
      />
      <p>{selectedNumbers}</p>
      <p>{blockedNumbers}</p>
    </div>
  );
}

LotteryPickComponent.propTypes = {
  count: PropTypes.number,
  modifyCount: PropTypes.func,
  selectedNumbers: PropTypes.arrayOf(PropTypes.number),
  modifySelected: PropTypes.func,
  blockedNumbers: PropTypes.arrayOf(PropTypes.number),
  modifyBlocked: PropTypes.func,
};

LotteryPickComponent.defaultProps = {
  count: 1,
  modifyCount: undefined,
  selectedNumbers: [],
  modifySelected: undefined,
  blockedNumbers: [],
  modifyBlocked: undefined,
};

export default LotteryPickComponent;
