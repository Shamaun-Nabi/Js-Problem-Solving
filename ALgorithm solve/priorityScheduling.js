const priorityScheduling = (
  numofProcess,
  taskName,
  brustTime,
  priorityValue
) => {
  const tName = taskName.split(",");
  let bTime = brustTime.split(",").map(Number);
  let pValue = priorityValue.split(",").map(Number);
  let realBox = [];

  //   pValue = pValue.sort((a, b) => {
  //     return a - b;
  //   });
  for (let i = 0; i < pValue.length; i++) {
    let tmp = {
      priority: pValue[i],
      process: tName[i],
      brustTime: bTime[i],
    };
   
    realBox.push(tmp);
    // console.log(realBox);
  }
  console.log(realBox.sort((a, b) => (a.priority > b.priority) ? 1 : -1));
  // console.log(realBox);



  return true;
};

console.log(priorityScheduling(4, "p1,p2,p3,p4", "21,3,6,2", "2,1,4,3"));
