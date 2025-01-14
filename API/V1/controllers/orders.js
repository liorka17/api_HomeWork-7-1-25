const mongoose = require('mongoose');
const OrderModel = require('../models/orders');

module.exports = {
    getAll: (req, res) => {
        try {
            OrderModel.find()
                .then((orders) => res.status(200).json(orders))
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
            OrderModel.find({ Oid: req.params.id })
                .then((orders) => {
                    if (orders.length === 0) {
                        return res.status(404).json({ msg: `Order with Oid ${req.params.id} not found` });
                    }
                    res.status(200).json(orders);
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

            const data = await OrderModel.insertMany([req.body]);
            return res.status(200).json(data);
        } catch (error) {
            console.error("Error adding new order:", error);
            return res.status(500).json({ message: "Failed to add order", error });
        }
    },

    updateById: (req, res) => {
        try {
            OrderModel.updateOne({ Oid: req.params.id }, req.body)
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
        const orderId = req.params.id;
        OrderModel.findOneAndDelete({ Oid: orderId })
            .then((deletedOrder) => {
                if (!deletedOrder) {
                    return res.status(404).json({ msg: `Order with Oid ${orderId} not found` });
                }
                res.status(200).json({ msg: `Order deleted`, order: deletedOrder });
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json({ msg: `Error server number 505`, error: err.message });
            });
    }
};