const SJF = (processCount, taskName, brustTime) => {
  const tName = taskName.split(",");
  let bTime = brustTime.split(",").map(Number);
  bTime = bTime.sort(function (a, b) {
    return a - b;
  });
  console.log(tName, "\n", bTime);

  let tmp = 0;
  let str = "";
  let avg = 0;
  for (let i = 0; i < processCount; i++) {
    str = str + tmp + tName[i] + " ";
    tmp = tmp + bTime[i];
    if (i < processCount - 1) {
      avg = avg + tmp;
    }
  }
  str = str + tmp;
  console.log(str);
  return "Avg  Time " + avg / processCount;
};

console.log(SJF(4, "p1,p2,p3,p4", "21,3,6,2"));
