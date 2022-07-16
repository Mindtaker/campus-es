/**
 *  Se añadió una pequeña comprobación de existencia de compañía en el POST y PUT. 
 *  Se utilizó el método populate() para completar el documento users con el documento companies. 
 */

const express = require('express');
const router = express.Router()
const userModel = require('../models/user')
const companyModel = require('../models/company');

router.route('/')
    .post(async (req, res) => {
        const data = new userModel({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            company: req.body.company
        });
        try {
            if (data.company) {
                if (await companyModel.findById(data.company)) {
                    const dataToSave = await data.save();
                    res.status(200).json(dataToSave);
                } else {
                    res.status(500).json({ message: `La compañia con ID: ${req.body.company} no existe` });
                }
            } else {
                const dataToSave = await data.save();
                res.status(200).json(dataToSave);
            }
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    })
    .get(async (req, res) => {
        try {
            const data = await userModel.find().populate('company');
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

router.route('/:id')
    .get(async (req, res) => {
        try {
            const id = req.params.id;
            const data = await userModel.findById(id).populate('company');
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
            if (updatedData.company) {
                if (await companyModel.findById(updatedData.company)) {
                    const result = await userModel.findByIdAndUpdate(
                        id, updatedData, options
                    ).populate('company');

                    res.status(200).send(result);
                } else {
                    res.status(500).json({ message: `La compañia con ID: ${updatedData.company} no existe` });
                }
            } else {
                const result = await userModel.findByIdAndUpdate(
                    id, updatedData, options
                ).populate('company');

                res.status(200).send(result);
            }
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    })
    .delete(async (req, res) => {
        try {
            const id = req.params.id;
            const data = await userModel.findByIdAndDelete(id);
            res.send(`El usuario ${data.username} fue eliminado`);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });

module.exports = router;