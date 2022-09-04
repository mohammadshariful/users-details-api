const { getUsersData, saveUserData } = require("../utils/usersData");
// random user get controller
module.exports.getRandomUser = (req, res) => {
  const users = getUsersData();
  const userIndex = Math.floor(Math.random() * users.length);
  res.send(users[userIndex]);
};
// get all user controller
module.exports.getAllUsers = (req, res) => {
  const users = getUsersData();
  res.send(users);
};
// save user data  controller
module.exports.saveUserData = (req, res) => {
  const userInfo = req.body;
  const existUser = getUsersData();
  if (
    userInfo._id === null ||
    userInfo.gender === null ||
    userInfo.name === null ||
    userInfo.contact === null ||
    userInfo.address === null ||
    userInfo.photoUrl === null
  ) {
    return res.status(401).send({ error: true, msg: "User data missing" });
  } else {
    existUser.push(userInfo);
    saveUserData(existUser);
    return res.send(existUser);
  }
};
