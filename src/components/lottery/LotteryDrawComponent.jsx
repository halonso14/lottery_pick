import PropTypes from 'prop-types';
import React from 'react';

const LotteryDrawComponent = (props) => {
  const { lotteryPick } = props;
  return (
    // eslint-disable-next-line react/jsx-key
    <div>
      {lotteryPick.selectedNumbers.length ? (
        <p>{`You have selected : ${lotteryPick.selectedNumbers}`}</p>
      ) : undefined}
      {lotteryPick.blockedNumbers.length ? (
        <p>{`You have blocked : ${lotteryPick.blockedNumbers}`}</p>
      ) : undefined}
      <p>{`You have drawed : ${lotteryPick.result}`}</p>
    </div>
  );
};

LotteryDrawComponent.propTypes = {
  lotteryPick: PropTypes.shape({
    selectedNumbers: PropTypes.arrayOf(PropTypes.number),
    blockedNumbers: PropTypes.arrayOf(PropTypes.number),
    result: PropTypes.arrayOf(PropTypes.number),
  }),
};

LotteryDrawComponent.defaultProps = {
  lotteryPick: {},
};

export default LotteryDrawComponent;
