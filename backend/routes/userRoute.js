import express from 'express'
import { login_User, register_User, admin_Login } from '../controller/userController.js'

const userRouter = express.Router();

userRouter.post('/register', register_User);
userRouter.post('/login', login_User);
userRouter.post('/admin', admin_Login);

export default userRouter;
