import PropTypes from 'prop-types';
import React, { Component } from 'react';
/* eslint-disable jsx-a11y/no-static-element-interactions */
class LotteryNumberComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberState: props.numberState,
      number: props.number,
      toggleNumber: props.toggleNumber,
    };
  }

  handleToggle = () => {
    const { toggleNumber } = this.state;
    toggleNumber();
  };

  render() {
    const { number, numberState } = this.state;
    return (
      <div
        className={numberState}
        onClick={this.handleToggle}
        onKeyPress={undefined}
        // role="button"
      >
        {number}
      </div>
    );
  }
}

LotteryNumberComponent.propTypes = {
  numberState: PropTypes.string,
  number: PropTypes.number,
  toggleNumber: PropTypes.func,
};

LotteryNumberComponent.defaultProps = {
  numberState: 'none',
  number: '0',
  toggleNumber: undefined,
};

export default LotteryNumberComponent;
