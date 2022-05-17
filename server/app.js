const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

const port = process.env.PORT || 3001

// Import Routes
const inventory = require('./routes/inventory');

// Middlewares
app.use(express.json());
app.use("/inventory", inventory)

mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true },
    () => console.log("Connected to DB")
);

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`)
});