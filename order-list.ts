console.log("order-list");
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
    const start = {
      value: list[0],
      index: 0,
    };
    const end = {
      value: list[1],
      index: 1,
    };
    const IsSwitchValues = start.value > end.value;
    if (IsSwitchValues) {
      list[start.index] = end.value;
      list[end.index] = start.value;
      console.log(list);
    } else console.log(list);
  } else {
    /* 3+ */
  }
}

console.log("----------");

/* notes
    this can be done in place or by making a new list
*/
