const mongoose = require('mongoose');
const UserModel = require('../models/users');

module.exports = {
    getAll: (req, res) => {
        try {
            UserModel.find()
                .then((users) => res.status(200).json(users))
                .catch((err) => {
                    console.error(err);
                    res.status(500).json({ msg: `500 server error`, error: err.message });
                });
        } catch (err) {
            console.error(err);
            res.status(500).json({ msg: `500 server error`, error: err.message });
        }
    },

    getById: (req, res) => {
        try {
            UserModel.find({ Uid: req.params.id })
                .then((users) => {
                    if (users.length === 0) {
                        return res.status(404).json({ msg: `User with Uid ${req.params.id} not found` });
                    }
                    res.status(200).json(users);
                })
                .catch((err) => {
                    console.error(err);
                    res.status(500).json({ msg: `500 server error`, error: err.message });
                });
        } catch (err) {
            console.error(err);
            res.status(500).json({ msg: `500 server error`, error: err.message });
        }
    },

    addNew: async (req, res) => {
        try {
            if (!req.body || Object.keys(req.body).length === 0) {
                return res.status(400).json({ message: "Invalid request body" });
            }

            const data = await UserModel.insertMany([req.body]);
            return res.status(200).json(data);
        } catch (error) {
            console.error("Error adding new user:", error);
            return res.status(500).json({ message: "Failed to add user", error });
        }
    },

    updateById: (req, res) => {
        try {
            UserModel.updateOne({ Uid: req.params.id }, req.body)
                .then((data) => {
                    return res.status(200).json(data);
                })
                .catch((err) => {
                    console.error(err);
                    res.status(500).json({ msg: `500 server error`, error: err.message });
                });
        } catch (err) {
            console.error(err);
            res.status(500).json({ msg: `500 server error`, error: err.message });
        }
    },

    deleteById: (req, res) => {
        const userId = req.params.id;
        UserModel.findOneAndDelete({ Uid: userId })
            .then((deletedUser) => {
                if (!deletedUser) {
                    return res.status(404).json({ msg: `User with Uid ${userId} not found` });
                }
                res.status(200).json({ msg: `User deleted`, user: deletedUser });
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json({ msg: `Error server number 505`, error: err.message });
            });
    }
};
