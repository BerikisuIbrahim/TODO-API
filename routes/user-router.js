import { Router } from "express";
import { getProfile, loginUser, logoutUser, registerUser, updatProfile } from "../controllers/user.js";
import { userAvatarUpload } from "../middlewares/upload.js";
import { hasPermission, isAuthenticated } from "../middlewares/auth.js";

// Create a routes
const userRouter = Router();

// Define routes
userRouter.post('/users/register', registerUser);

userRouter.post('/users/login', loginUser);

userRouter.get('/users/me', isAuthenticated, hasPermission('get_profile'), getProfile);

userRouter.post('/users/logout', isAuthenticated, logoutUser);

userRouter.patch('users/me', isAuthenticated, hasPermission('update_profile'),
userAvatarUpload.single('avatar'), updatProfile);

//Export router
export default userRouter;
