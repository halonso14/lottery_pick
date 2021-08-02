export function generateID() {
  return Math.random().toString(36).substr(2, 11);
}

function generateNumberArray(initialValue, range) {
  return Array.from({ length: range }, (key, value) => value + initialValue);
}

export function generateLotteryEntry() {
  return [
    generateNumberArray(1, 10),
    generateNumberArray(11, 10),
    generateNumberArray(31, 10),
    generateNumberArray(41, 5),
  ];
}

export function generateLotteryState(range) {
  // eslint-disable-next-line no-unused-vars
  return Array.from({ length: range }, (key, value) => 'none');
}
