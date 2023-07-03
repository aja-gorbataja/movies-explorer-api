require('dotenv').config();
const express = require('express');
const { errors } = require('celebrate');
const helmet = require('helmet');
<<<<<<< HEAD
const cors = require('cors');
=======
const { cors } = require('cors');
>>>>>>> fe2bad05f3dcb37c9e385a12fb1bbcf81ef589fa
const mongoose = require('mongoose');
const router = require('./routes');

const { MONGO_URL = 'mongodb://127.0.0.1:27017/bitfilmsdb', PORT = 3000 } = process.env;
const app = express();
const handleErrors = require('./middlewares/handleErrors');
const { requestLogger, errorLogger } = require('./middlewares/logger');

app.use(helmet());

app.use(express.json());

app.use(cors());

mongoose.connect(MONGO_URL);

app.use(requestLogger);

app.use(router);

app.use(errorLogger);

app.use(errors());

app.use(handleErrors);

app.listen(PORT);
