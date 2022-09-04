const { getUsersData, saveUserData } = require("../utils/usersData");
// random user get controller
module.exports.getRandomUser = (req, res) => {
  const users = getUsersData();
  const userIndex = Math.floor(Math.random() * users.length);
  res.send(users[userIndex]);
};
// get all user controller
module.exports.getAllUsers = (req, res) => {
  const { limit } = req.query;
  const users = getUsersData();
  if (limit) {
    return res.send(users.slice(0, limit));
  } else {
    return res.send(users);
  }
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
    res.send({
      success: true,
      msg: "User info added successfully",
    });
  }
};
// update a random user info
module.exports.updateRandomUser = (req, res) => {
  const userData = req.body;
  const users = getUsersData();
  const userIndex = Math.floor(Math.random() * users.length);
  const randomUser = users[userIndex];
  let findExist = users.find((user) => user._id === randomUser._id);

  if (!findExist) {
    return res.status(409).send({ error: true, msg: "user not exist" });
  } else {
    findExist = userData;
    users.push(findExist);
    saveUserData(users);
    return res.send({
      success: true,
      msg: "random user data updated successfully",
      data: users,
    });
  }
};
// delete a user
module.exports.deleteUser = (req, res) => {
  const users = getUsersData();
  const userIndex = Math.floor(Math.random() * users.length);
  const randomUser = users[userIndex];
  const restUsers = users.filter((user) => user._id !== randomUser._id);

  saveUserData(restUsers);
  res.send({
    success: true,
    msg: "delete a users successfully",
    data: restUsers,
  });
};
