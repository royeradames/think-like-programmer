console.log("order-list.ts");
/* order a given list of numbers */

const listToOder = [[0], [7, 3], [6, 2, 4], [6, 2, 3, 8], [20, 8, 9, 10, 4]];
listToOder.forEach((list) => {
  orderList(list);
});

function orderList(list: number[]) {
  let orderList;
  /* one or less */
  if (list.length <= 1) console.log(list);
  else if (list.length === 2) {
    /* a pair */
    swappingTechnique();
  } else {
    /* 3+ */
  }

  /* notes
        this can be done in place or by making a new list
    */

  function swappingTechnique() {
    /* swapping technique */
    const start = {
      value: list[0],
      index: 0,
    };
    const end = {
      value: list[1],
      index: 1,
    };
    const IsSwitchValues = start.value > end.value;
    if (IsSwitchValues)
      swapValues(start.value, start.index, end.value, end.index);
    else console.log(list);

    function swapValues(
      startValue: number,
      startIndex: number,
      endValue: number,
      endIndex: number
    ) {
      list[startIndex] = endValue;
      list[endIndex] = startValue;
      console.log(list);
    }
  }
}

console.log("----------");
