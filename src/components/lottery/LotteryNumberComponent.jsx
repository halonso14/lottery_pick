import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import styled from 'styled-components';

const LotteryNumberBox = styled.div`
  display: inline-block;
  border-radius: 3px;
  margin: 10px;
  width: 80px;
  height: 80px;
  border: solid 2px
    ${(props) => {
      switch (props.className) {
        case 'selected':
          return 'green';
        case 'blocked':
          return 'red';
        case 'none':
        default:
          return 'black';
      }
    }};
`;

/* eslint-disable jsx-a11y/no-static-element-interactions */
function LotteryNumberComponent(props) {
  const { state, number, toggleNumber } = props;

  const handleToggleNumber = useCallback(
    () => toggleNumber(state),
    [toggleNumber],
  );
  return (
    <LotteryNumberBox
      className={state}
      onClick={handleToggleNumber}
      onKeyPress={undefined}
    >
      {number}
    </LotteryNumberBox>
  );
}

LotteryNumberComponent.propTypes = {
  state: PropTypes.string,
  number: PropTypes.number,
  toggleNumber: PropTypes.func,
};

LotteryNumberComponent.defaultProps = {
  state: 'none',
  number: 0,
  toggleNumber: undefined,
};

export default LotteryNumberComponent;
