const express = require("express");
const router = express.Router();
const storyModel = require("../models/story");
const userModel = require("../models/user");
const ObjectId = require('mongodb').ObjectId;

router
  .route("/")
  .post(async (req, res) => {
    const data = new storyModel({
      title: req.body.title,
      content: req.body.content,
      user: req.body.user,
    });
    try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  })
  .get(async (req, res) => {
    try {
      const data = await storyModel.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

router
  .route("/user/:id")
  .get(async (req, res) => {
    try {
      const id = req.params.id;
      let ObjId = new ObjectId(id);
      const data = await storyModel.find({
        user: ObjId
      });
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
      const data = await storyModel.findById(id);
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

      const result = await storyModel.findByIdAndUpdate(
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
      const data = await storyModel.findByIdAndDelete(id);
      res.send(`The story ${data.name} has been deleted successfully`);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

module.exports = router;
