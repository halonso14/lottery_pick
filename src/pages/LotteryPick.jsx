import PropTypes from 'prop-types';
import React, { Component } from 'react';
import LotteryNumberContainer from '../containers/lottery/LotteryNumberContainer';
// MEMO https://velog.io/@_jouz_ryul/ESLint-Prettier-Airbnb-Style-Guide%EB%A1%9C-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0

class LotteryPick extends Component {
  constructor(props) {
    super(props);
    this.state = { lotteryPicks: props.lotteryPicks };
  }

  render() {
    const { lotteryPicks } = this.state;
    return (
      <div>
        <h1>Pick your Lottery number</h1>
        <div>test</div>
        <div>{lotteryPicks}</div>
        {/* TODO LottertTableContainer */}
        <LotteryNumberContainer state="none" number={1} toggle={undefined} />
      </div>
    );
  }
}

LotteryPick.propTypes = {
  lotteryPicks: PropTypes.number,
};

LotteryPick.defaultProps = {
  lotteryPicks: 1,
};

export default LotteryPick;
