const LogicalErrors = () => {
  console.log("response from the LogicalErrors");
  let a = 10;
  let b = 0;
  if ((a = 21)) console.log("a is equal to b");
  else console.log("b is a greater then a");
};

module.exports = LogicalErrors;
