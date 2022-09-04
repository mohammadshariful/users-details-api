const { getUserData } = require("../utils/usersData");
module.exports.getRandomUser = (req, res) => {
  const users = getUserData();
  const userIndex = Math.floor(Math.random() * users.length);
  res.send(users[userIndex]);
};
