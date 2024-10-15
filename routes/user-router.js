import { Router } from "express";
import { loginUser, logoutUser, registerUser, updatProfile } from "../controllers/user.js";
import { userAvatarUpload } from "../middlewares/upload.js";

// Create a routes
const userRouter = Router();

// Define routes
userRouter.post('/users/register', registerUser);

userRouter.post('/users/login', loginUser);

userRouter.post('/users/logout', logoutUser);
userRouter.post('/users/me', userAvatarUpload.single('avatar'), updatProfile)

//Export router
export default userRouter;
