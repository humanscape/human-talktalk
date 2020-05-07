export function getShuffledArray<T>(array: T[]) {
  return array
    .map((element) => ({
      key: Math.random(),
      element,
    }))
    .sort((left, right) => left.key - right.key)
    .map((obj) => obj.element);
}

export function getBalancedChunks<T>(array: T[], size: number) {
  const count = Math.ceil(array.length / size);
  return new Array(count)
    .fill(undefined)
    .map((_, index) => array.filter((__, subIndex) => subIndex % count === index));
}
