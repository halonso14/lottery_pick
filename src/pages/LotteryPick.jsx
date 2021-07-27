import React, { Component } from 'react';
import LotteryNumberContainer from '../containers/lottery/LotteryNumberContainer';

class LotteryPick extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Pick your Lottery number</h1>
        <div>test</div>
        <LotteryNumberContainer
          state="none"
          number={121}
          toggle={() => console.log('toggle')}
        />
      </div>
    );
  }
}

export default LotteryPick;
