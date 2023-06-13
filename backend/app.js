const express = require('express');
const { errors } = require('celebrate');
const helmet = require('helmet');
const mongoose = require('mongoose');
const router = require('./routes/routes');

const { PORT = 3000 } = process.env;
const app = express();
const handleErrors = require('./middlewares/handleErrors');
const { requestLogger, errorLogger } = require('./middlewares/logger');

app.use(helmet());

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/bitfilmsdb');

app.use(requestLogger);

app.use(router);

app.use(errorLogger);

app.use(errors());

app.use(handleErrors);

app.listen(PORT);
