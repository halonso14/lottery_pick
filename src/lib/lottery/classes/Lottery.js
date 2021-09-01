/* eslint-disable no-underscore-dangle */
export default class Lottery {
  constructor(selectNumbers, blockedNumbers) {
    this._available_number = 45;
    this._total_pick = 6;
    this._available_numbers = Array.from(
      { length: this._available_number },
      (v, k) => k + 1,
    );
    this._selected_numbers = selectNumbers;
    this._blocked_numbers = blockedNumbers;
    this._my_picks = [];
    this.selectNumber = this.selectNumber.bind(this);
    this.removeNumber = this.removeNumber.bind(this);
    this.drawLottery = this.drawLottery.bind(this);
  }

  get selectedNumbers() {
    return this._selected_numbers;
  }

  get blockedNumbers() {
    return this._blocked_numbers;
  }

  get result() {
    return this._my_picks;
  }

  selectNumber(numberOfDraw) {
    for (let i = 0; i < numberOfDraw; i += 1) {
      const index = Math.floor(Math.random() * this._available_numbers.length);
      this._my_picks.push(this._available_numbers[index]);
      this._available_numbers.splice(index, 1);
    }
  }

  removeNumber(numbers) {
    for (let i = 0; i < numbers.length; i += 1) {
      this._available_numbers = this._available_numbers.filter(
        (availableNumber) => availableNumber !== numbers[i] / 1,
      );
    }
  }

  drawLottery() {
    if (this._selected_numbers.length >= this._total_pick) {
      this._available_numbers = [...this._selected_numbers];
    } else {
      this.removeNumber(this._blocked_numbers);
      this._my_picks = [...this._selected_numbers];
      this.removeNumber(this._selected_numbers);
    }
    this.selectNumber(this._total_pick - this._my_picks.length);
  }
}
