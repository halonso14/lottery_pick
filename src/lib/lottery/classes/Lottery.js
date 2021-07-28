/* eslint-disable no-underscore-dangle */
export default class Lottery {
  _available_number = 45;

  _total_pick = 6;

  _available_numbers = [];

  _my_picks = [];

  constructor() {
    this.availableNumbers = Array.from(
      { length: this.availableNumber },
      (v, k) => k + 1,
    );
  }

  get availableNumber() {
    return this._available_number;
  }

  set availableNumber(availableNumber) {
    this._available_number = availableNumber;
  }

  get totalPick() {
    return this._total_pick;
  }

  set totalPick(totalPick) {
    this._total_pick = totalPick;
  }

  get availableNumbers() {
    return this._available_numbers;
  }

  set availableNumbers(availableNumber) {
    this._available_numbers = availableNumber;
  }

  get picks() {
    return this._my_picks;
  }

  set picks(picks) {
    this._my_picks.push(picks);
  }

  selectNumber(number) {
    if (this._my_picks.includes(number)) {
      return;
    }

    if (this._my_picks.length < this._total_pick) {
      this._my_picks.push(number);
    }
  }

  unselectNumber(number) {
    if (!this._my_picks.includes(number)) {
      return;
    }

    this._my_picks.filter((pickedNumber) => pickedNumber !== number);
  }

  pickLottery() {
    while (this._my_picks.length < this._total_pick) {
      const index = Math.floor(Math.random() * this._available_numbers.length);
      this.selectNumber(this._available_numbers[index]);
    }
  }
}
