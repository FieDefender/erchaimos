// 计算数组的众数
function calculateMode(arr) {
  const frequencyMap = arr.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
  }, {});
  const maxFrequency = Math.max(...Object.values(frequencyMap));
  return Object.keys(frequencyMap).filter(key => frequencyMap[key] === maxFrequency).map(Number);
}

// 计算数组的标准差
function calculateStandardDeviation(arr) {
  const mean = calculateMean(arr);
  const squaredDifferences = arr.map(val => Math.pow(val - mean, 2));
  const variance = calculateMean(squaredDifferences);
  return Math.sqrt(variance);
}