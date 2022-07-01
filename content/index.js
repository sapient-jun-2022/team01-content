import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/content-route';

// variable declaration
const app = express();
require('dotenv').config()

const PORT = process.env.PORT
const DB_URL = process.env.DB_URL


mongoose.Promise = global.Promise;
mongoose.connect(DB_URL, { useNewUrlParser: true });


// configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));

routes(app);

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})
