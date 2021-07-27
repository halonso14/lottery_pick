import React, { Component } from 'react';
/* eslint-disable jsx-a11y/no-static-element-interactions */
class LotteryNumberComponent extends Component {
  handleToggle = () => {
    this.toggleNumber();
  };

  render() {
    return (
      <div
        className={this.state}
        onClick={this.handleToggle}
        onKeyPress={undefined}
        // role="button"
      >
        {this.number}
      </div>
    );
  }
}

export default LotteryNumberComponent;
