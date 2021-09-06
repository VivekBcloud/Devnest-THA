const fs = require("fs");
const { argv } = require("process");

const actionToPerform = argv[2];
// console.log(actionToPerform);
try {
  if (actionToPerform === "mkdir") {
    const folderName = argv[3];
    fs.mkdirSync(folderName);
  } else if (actionToPerform === "writeFile") {
    const writeTo = argv[3];
    const toWrite = argv[4];
    fs.writeFileSync(writeTo, toWrite);
  } else if (actionToPerform === "appendFile") {
    const appendTo = argv[3];
    const toAppend = argv[4];
    fs.appendFileSync(appendTo, toAppend);
  } else if (actionToPerform === "renameFile") {
    const renameFrom = argv[3];
    const renameTo = argv[4];
    fs.renameSync(renameFrom, renameTo);
  } else if (actionToPerform === "readFile") {
    const readFrom = argv[3];
    const data = fs.readFileSync(readFrom, "utf-8");
    console.log(data);
  } else if (actionToPerform === "delFile") {
    const toDel = argv[3];
    fs.unlinkSync(toDel);
  } else if (actionToPerform === "rmdir") {
    const toDel = argv[3];
    fs.rmdirSync(toDel);
  } else {
    console.log("wrong command");
  }
} catch {
  console.log("wrong parameters");
}
