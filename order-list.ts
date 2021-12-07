console.log("order-list.ts");
/* order a given list of numbers */

const listToOder = [[0], [7, 3], [6, 2, 4], [6, 2, 3, 8], [20, 8, 9, 10, 4]];
listToOder.forEach((list) => {
  orderList(list);
});

function orderList(list: number[]) {
  let orderList;
  let countSwapping = 0;
  /* one or less */
  if (list.length <= 1) console.log(list);
  else if (list.length === 2) {
    /* a pair */
    for (let i = 1; i <= list.length - 1; i++) {
      let startIndex = i - 1;
      let startValue = list[startIndex];
      let endIndex = i;
      let endValue = list[i];

      swappingTechnique(startValue, startIndex, endValue, endIndex);
    }
    console.log(list);
  } else {
    /* 3+ 
        swap values until you don't
        and when you gove look at the list and you don't hav eto swap values then you are finish
    */
    do {
      countSwapping = 0;
      for (let i = 1; i <= list.length - 1; i++) {
        let startIndex = i - 1;
        let startValue = list[startIndex];
        let endIndex = i;
        let endValue = list[i];
        swappingTechnique(startValue, startIndex, endValue, endIndex);
      }
    } while (countSwapping != 0);
    console.log(list);
  }

  /* notes
        this can be done in place or by making a new list
    */
  function resconstructionTechnique() {}
  function swappingTechnique(
    startValue: number,
    startIndex: number,
    endValue: number,
    endIndex: number
  ) {
    const needToSwapValues = startValue > endValue;
    if (needToSwapValues)
      swapValues(startValue, startIndex, endValue, endIndex);

    function swapValues(
      startValue: number,
      startIndex: number,
      endValue: number,
      endIndex: number
    ) {
      list[startIndex] = endValue;
      list[endIndex] = startValue;
      countSwapping++;
    }
  }
}

console.log("----------");
