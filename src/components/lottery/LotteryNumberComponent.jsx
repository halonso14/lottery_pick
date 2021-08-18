import React from 'react';
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
function LotteryNumberComponent() {
  return <LotteryNumberBox />;
}

export default LotteryNumberComponent;
