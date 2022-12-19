var n = require("node-7z");
n.extractFull("./certify_2022-10-30.7z", "./", {
  $bin: "7z",
  charset: "UTF-8",
  password: process.env["PASSWORD"]
});
