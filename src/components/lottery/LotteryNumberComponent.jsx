/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LotteryNumberBox = styled.button`
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
  // eslint-disable-next-line no-unused-vars
  const { number, status, toggleNumber } = props;
  return (
    <LotteryNumberBox className={status} onClick={toggleNumber} value={number}>
      {number}
    </LotteryNumberBox>
  );
}

LotteryNumberComponent.propTypes = {
  number: PropTypes.number,
  status: PropTypes.string,
  toggleNumber: PropTypes.func,
};

LotteryNumberComponent.defaultProps = {
  number: 0,
  status: '',
  toggleNumber: () => {},
};

function isEqual(prevProps, nextProps) {
  return prevProps.status === nextProps.status;
}

export default React.memo(LotteryNumberComponent, isEqual);
