function generateID() {
  return Math.random().toString(36).substr(2, 11);
}

export function generateLottryPick() {
  return {
    id: generateID(),
    count: 1,
    selectedNumbers: [],
    blockedNumbers: [],
  };
}

function generateNumberArray(initialValue, range) {
  return Array.from({ length: range }, (key, value) => value + initialValue);
}

export function generateLotteryEntry() {
  return generateNumberArray(1, 45);
}

export function generateLotteryState(range) {
  // eslint-disable-next-line no-unused-vars
  return Array.from({ length: range }, (key, value) => 'none');
}
