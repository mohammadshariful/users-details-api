const fs = require("fs");
const dataPath = "users.json";
//get all users
module.exports.getUsersData = () => {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData);
};
//save user
module.exports.saveUserData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync(dataPath, stringifyData);
};
