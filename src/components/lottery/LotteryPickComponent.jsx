import PropTypes from 'prop-types';
import React from 'react';
import LotteryNumberContainer from '../../containers/lottery/LotteryNumberContainer';
/* eslint-disable jsx-a11y/no-static-element-interactions */
function LotteryPickComponent(props) {
  const { id } = props;

  return (
    <div>
      <LotteryNumberContainer id={id} />
    </div>
  );
}

LotteryPickComponent.propTypes = {
  id: PropTypes.string,
};

LotteryPickComponent.defaultProps = {
  id: '',
};

export default LotteryPickComponent;
