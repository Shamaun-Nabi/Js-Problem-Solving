const extReturn = (name) => {
  const existsName = name.split(".").pop();
  return console.log(existsName);
};
extReturn("auto.exe");
