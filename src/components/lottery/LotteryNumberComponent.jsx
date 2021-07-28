import PropTypes from 'prop-types';
import React from 'react';
/* eslint-disable jsx-a11y/no-static-element-interactions */
function LotteryNumberComponent(props) {
  const {state, number, toggleNumber } = props;

  return (
    <div
      className={state}
      onClick={toggleNumber}
      onKeyPress={undefined}
    >
      {number}
    </div>
  );
}

LotteryNumberComponent.propTypes = {
  state: PropTypes.string,
  number: PropTypes.number,
  toggleNumber: PropTypes.func,
};

LotteryNumberComponent.defaultProps = {
  state: 'none',
  number: '0',
  toggleNumber: undefined,
};

export default LotteryNumberComponent;
