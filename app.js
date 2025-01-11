require('dotenv').config(); // כדי לוודא שמשתני הסביבה נטענים
const express = require('express');
const app = express();
const prodRouter = require('./API/V1/routes/product');
const morgan = require('morgan');
const mongoose = require('mongoose');
const secure = require('./API/V1/middlewares/secure');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoConnStr = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@liorka17.goeqk.mongodb.net/?retryWrites=true&w=majority&appName=liorka17`;

mongoose.connect(mongoConnStr, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err.message));

app.use(secure);
app.use('/product', prodRouter);

app.all('*', (req, res) => {
    return res.status(404).json({ msg: 'Not Found 404' });
});

module.exports = app;
