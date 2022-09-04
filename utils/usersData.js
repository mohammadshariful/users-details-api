const fs = require("fs");
const dataPath = "users.json";

module.exports.getUserData = () => {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData);
};

module.exports.saveUsers = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync(dataPath, stringifyData);
};
