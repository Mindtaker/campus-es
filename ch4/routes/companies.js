const express = require('express');
const router = express.Router();
const companyModel = require('../models/company');
const userModel = require('../models/user');

router.route('/')
    .post(async (req, res) => {
        const data = new companyModel({
            name: req.body.name
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
            const data = await companyModel.find();
            res.status(200).json(data);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

router.route('/:id')
    .get(async (req, res) => {
        try {
            const id = req.params.id;
            const data = await companyModel.findById(id);
            res.status(200).json(data);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    })
    .put(async (req, res) => {
        try {
            const id = req.params.id;
            const updatedData = req.body;
            const options = { new: true };

            const result = await companyModel.findByIdAndUpdate(
                id, updatedData, options
            );

            res.status(200).send(result);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    })
    .delete(async (req, res) => {
        try {
            const id = req.params.id;
            const data = await companyModel.findByIdAndDelete(id);
            await userModel.updateMany({company: id}, { $unset: { company: "" }});
            res.send(`La compañia ${data.name} ha sido eliminada`);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });

module.exports = router;