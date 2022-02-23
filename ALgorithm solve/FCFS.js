const FCFS = (processCount, processName, processTime) => {
  console.log(processCount, processName, processTime);
  const pName = processName.split(",");
  let pTime = processTime.split(",");
  pTime = pTime.map(Number);
  //   console.log(pName, pTime);
  let myStr = "";
  let temp = 0;
  for (let i = 0; i < processCount; i++) {
    let takeValue = pTime[i];
    myStr = myStr + temp + pName[i] + " ";
    temp = temp + takeValue;
    myStr = myStr + temp;
    //   console.log(myStr)
    return myStr;
  }

  myStr = mystr + temp;
};

console.log(FCFS(4, "p1,p2,p3,p4", "21,3,6,2"));
