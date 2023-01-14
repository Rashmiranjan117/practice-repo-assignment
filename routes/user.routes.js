const express = require("express");
const userRouter = express.Router();
const { getData } = require("../api/api");
const { UserModel } = require("../models/user.model");

userRouter.get("/", async (req, res) => {
  try {
    let data = await getData();
    await UserModel.insertMany(data);
    res.send({ msg: "Data Added from Json.Typicode" });
  } catch (err) {
    console.log(err);
    res.send({ err });
  }
});

userRouter.delete("/", async (req, res) => {
  try {
    await UserModel.deleteMany()
    res.send({ msg: "Data removed from db" });
  } catch (err) {
    res.send({ err });
  }
});

userRouter.get("/details", async (req, res) => {
  try {
    let data = await UserModel.find();
    res.send(data);
  } catch (err) {
    res.send({ err });
  }
});

module.exports = { userRouter };
