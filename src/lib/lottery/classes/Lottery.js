/* eslint-disable no-underscore-dangle */
export default class Lottery {
  _availableNumber = 45;

  _totalPick = 6;

  _availableNumbers = [];

  _picks = [];

  constructor() {
    this.availableNumbers = Array.from(
      { length: this.availableNumber },
      (v, k) => k + 1,
    );
  }

  get availableNumber() {
    return this._availableNumber;
  }

  set availableNumber(availableNumber) {
    this._availableNumber = availableNumber;
  }

  get totalPick() {
    return this._totalPick;
  }

  set totalPick(totalPick) {
    this._totalPick = totalPick;
  }

  get availableNumbers() {
    return this._availableNumbers;
  }

  set availableNumbers(availableNumber) {
    this._availableNumbers = availableNumber;
  }

  get picks() {
    return this._picks;
  }

  set picks(picks) {
    this.include(picks);
  }

  exclude(numberArray) {
    for (let i = 0; i < numberArray.length; i += 1) {
      const tmpIndex = this._availableNumbers.indexOf(numberArray[i]);
      if (tmpIndex > -1) {
        this._availableNumbers.splice(tmpIndex, 1);
      }
    }
  }

  include(numberArray) {
    for (let i = 0; i < numberArray.length; i += 1) {
      if (this._picks.length < this._totalPick) {
        this._picks.push(numberArray[i]);
      }

      const tmpIndex = this._availableNumbers.indexOf(numberArray[i]);
      if (tmpIndex > -1) {
        this._availableNumbers.splice(tmpIndex, 1);
      }
    }
  }

  pickLottery() {
    while (this._picks.length < this._totalPick) {
      const index = Math.floor(Math.random() * this._availableNumbers.length);
      this._picks.push(this._availableNumbers[index]);
    }
  }
}
