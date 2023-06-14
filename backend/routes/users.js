const userRouter = require('express').Router();
const { updateUserValidation } = require('../utils/celebrateValidation');
const { getUser, updateUser } = require('../controllers/users');

userRouter.get('/me', getUser);

userRouter.patch('/me', updateUserValidation, updateUser);

module.exports = userRouter;
