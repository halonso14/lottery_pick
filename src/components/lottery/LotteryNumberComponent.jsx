import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// const LotteryNumberBox = styled.div`
//   display: inline-block;
//   border-radius: 3px;
//   margin: 10px;
//   width: 80px;
//   height: 80px;
//   border: solid 2px
//     ${(props) => {
//       switch (props.className) {
//         case 'selected':
//           return 'green';
//         case 'blocked':
//           return 'red';
//         case 'none':
//         default:
//           return 'black';
//       }
//     }};
// `;

/* eslint-disable jsx-a11y/no-static-element-interactions */
function LotteryNumberComponent(props) {
  // eslint-disable-next-line no-unused-vars
  const { number, toggleNumber } = props;
  // eslint-disable-next-line react/button-has-type
  return <button onClick={toggleNumber}>{number}</button>;
}

LotteryNumberComponent.propTypes = {
  number: PropTypes.number,
  toggleNumber: PropTypes.func,
};

LotteryNumberComponent.defaultProps = {
  number: 0,
  toggleNumber: () => {},
};

export default LotteryNumberComponent;
