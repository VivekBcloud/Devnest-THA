const fs = require("fs");
const { argv } = require("process");

const actionToPerform = argv[2];
// console.log(actionToPerform);
try {
  if (actionToPerform === "mkdir") {
    const folderName = argv[3];
    fs.mkdir(folderName, () => {
      console.log("file created");
    });
  } else if (actionToPerform === "writeFile") {
    const writeTo = argv[3];
    const toWrite = argv[4];
    fs.writeFile(writeTo, toWrite, () => {
      console.log("File written");
    });
  } else if (actionToPerform === "readFile") {
    const readFrom = argv[3];
    fs.readFile(readFrom, "utf-8", (err, data) => {
      if (err) console.log(err);
      else console.log(data);
    });
  }
} catch {
  console.log("wrong parameters");
}
