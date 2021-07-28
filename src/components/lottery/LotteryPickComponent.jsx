import PropTypes from 'prop-types';
import React from 'react';
/* eslint-disable jsx-a11y/no-static-element-interactions */
function LotteryPickComponent(props) {
  const {
    id,
    selectedNumbers,
    // eslint-disable-next-line no-unused-vars
    modifySelected,
    blockedNumbers,
    // eslint-disable-next-line no-unused-vars
    modifyBlocked
  } = props;
  

  return (
    <div>
      <p>{id}</p>
      <p>{selectedNumbers}</p>
      <p>{blockedNumbers}</p>
    </div>
  );
}

LotteryPickComponent.propTypes = {
  id: PropTypes.string,
  selectedNumbers: PropTypes.string,
  modifySelected: PropTypes.func,
  blockedNumbers: PropTypes.string,
  modifyBlocked: PropTypes.func,
};

LotteryPickComponent.defaultProps = {
  id: '1',
  selectedNumbers: [], 
  modifySelected: undefined,
  blockedNumbers: [],
  modifyBlocked: undefined
};

export default LotteryPickComponent;
