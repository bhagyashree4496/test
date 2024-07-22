const express = require("express");
const router = express.Router();
const { users } = require("../data/mockData");

// Add a new user
router.post("/", (req, res) => {
  console.log(req.body);
  const { username, phone, areaName, buildingName } = req.body;
  const newUser = {
    id: `userId${users.length + 1}`,
    username,
    phone,
    areaName,
    buildingName,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
