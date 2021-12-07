console.log("order-list");
/* order a given list of numbers */

const listToOder = [[0], [7, 3], [6, 2, 4], [6, 2, 3, 8], [20, 8, 9, 10, 4]];
listToOder.forEach((list) => {
  orderList(list);
});

function orderList(list: number[]) {
  let orderList;
  /* one or less */
  if (list.length <= 1) return list;
  /* a pair */

  console.log(orderList);
}

console.log("----------");

/* notes
    this can be done in place or by making a new list
*/
