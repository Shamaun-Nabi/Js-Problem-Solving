const FCFS = (processCount, processName, processTime) => {
  const pName = processName.split(",");
  let pTime = processTime.split(",");
  pTime = pTime.map(Number);
  console.log(pName, pTime);

  let myStr = "";
  let temp = 0;
  let avg = 0;
  for (let i = 0; i < processCount; i++) {
    let takeTime = pTime[i];
    // myStr =myStr+temp;
    myStr = myStr + " " + temp + pName[i] + " ";
    temp = temp + pTime[i];
    if (i < processCount - 1) {
      avg = avg + temp;
      console.log(avg);
    }

    // console.log(myStr);
  }
  console.log(avg / processCount);
  myStr = myStr + temp;
  return myStr;
};

console.log(FCFS(4, "p1,p2,p3,p4", "21,3,6,2"));
