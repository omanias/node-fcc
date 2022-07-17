const { readFile } = require("fs");

//1
console.log("Started a first task");

readFile("result-sync.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  //3
  console.log(result);
  //4
  console.log("completed first task");
});

//2
console.log("startig next task");
