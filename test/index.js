function twoSum(arrayList, target) {
  let num = [];
  for (let p1 = 0; p1 < arrayList.length; p1++) {
    let findNumber = target - num[p1];
    for (let p2 = p1 + 1; p2 < arrayList.length; p2++) {
      if (target === findNumber) {
        return [p1, p2];
      }
    }
  }
}

module.exports = twoSum;
