import { Router } from "express";
import { logIn, logOut, registerUser } from "../controllers/user.js";

// Create a routes
const userRouter = Router();

// Define routes
userRouter.post('/users/register', registerUser);

userRouter.post('/users/login', logIn);

userRouter.post('/users/logout', logOut);

//Export router
export default userRouter;
