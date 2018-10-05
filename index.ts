const range = (start: number, end: number, step: number = 1): number[] => {
  if (!start || !end) {
    throw new Error('Please provide both a start and end value');
  }
  if (isNaN(start) || isNaN(end) || isNaN(step)) {
    throw new Error('Values must be numbers');
  }
  if (!isFinite(start) || !isFinite(end) || !isFinite(step) || start % 1 !== 0 || end % 1 !== 0 || step % 1 !== 0) {
    throw new Error('Please provide only real integers');
  }
  if (step < 1) {
    throw new Error('Step must be a positive integer');
  }

  const isIncrementing = end >= start;
  const size = Math.ceil((isIncrementing ? end - start + 1 : start - end + 1) / step);
  if (!isIncrementing) {
    step = -step;
  }

  const mapFn = i => {
    const retVal = start;
    start += step;
    return retVal;
  };

  return new Array(size).fill(undefined).map(mapFn);
};


export default range;
