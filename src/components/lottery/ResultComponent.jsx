import PropTypes from 'prop-types';
import React from 'react';

const ResultComponent = (props) => {
  const { lotteryPicks } = props;

  return (
    <div>
      <h1>Result</h1>
      {lotteryPicks}
    </div>
  );
};

ResultComponent.propTypes = {
  lotteryPicks: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
};

ResultComponent.defaultProps = {
  lotteryPicks: [],
};

export default ResultComponent;
