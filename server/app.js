const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');



const port = process.env.PORT || 3001

mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true },
    () => console.log("Connected to DB")
);

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`)
});