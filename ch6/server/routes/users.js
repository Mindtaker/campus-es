const express = require("express");
const router = express.Router();
const userModel = require("../models/user");
const storyModel = require("../models/story");

router
  .route("/")
  .post(async (req, res) => {
    if (!req.body.login) {
      const data = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    } else {
      try {
        const data = await userModel.findOne({
          email: req.body.email,
          password: req.body.password,
        });
        // const data = await userModel.findOne({ email: req.body.email });
        if (data !== null) {
          res.status(200).json(data);
        } else {
          res
            .status(400)
            .json({ message: "User or password invalid", error: 400 });
        }
      } catch (error) {
        res.status(500).json({ message: error.message, error: 500 });
      }
    }
  })
  .get(async (req, res) => {
    try {
      const data = await userModel.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

router
  .route("/:id")
  .get(async (req, res) => {
    try {
      const id = req.params.id;
      const data = await userModel.findById(id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })
  .put(async (req, res) => {
    try {
      const id = req.params.id;
      const updatedData = req.body;
      const options = { new: true };
      const result = await userModel.findByIdAndUpdate(
        id,
        updatedData,
        options
      );

      res.status(200).send(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  })
  .delete(async (req, res) => {
    try {
      const id = req.params.id;
      const data = await userModel.findByIdAndDelete(id);
      res.send(`User ${data.username} was deleted successfully`);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

module.exports = router;
