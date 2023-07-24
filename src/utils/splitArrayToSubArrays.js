export const splitArrayToSubArray = (arr, columnCount = 3) => {
  let result = [];
  let heights = Array(columnCount).fill(0);

  for (let i = 0; i < columnCount; i++) {
    result.push([]);
  }

  arr.forEach((_, i) => {
    const lowestSubArrayIndex = heights.indexOf(Math.min(...heights));

    result[lowestSubArrayIndex].push(arr[i]);

    const imageHeight = arr[i].cover_photo?.height || arr[i].height;
    heights[lowestSubArrayIndex] = heights[lowestSubArrayIndex] + imageHeight;
  });

  return result;
};
