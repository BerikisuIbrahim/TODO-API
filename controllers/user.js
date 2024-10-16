import { registerUserValidator, loginUserValidator } from "../validators/user_validators.js";
import { UserModel } from "../models/user_models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res, next) => {
    try {
        // Validate user input
        const { error, value } = registerUserValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        // Check if user does not exist
        const user = await UserModel.findOne({ email: value.email });
        if (user) {
            return res.status(409).json("User already exist!");
        }
        // Hash their password
        const hashedPassword = bcrypt.hashSync(value.password, 10);
        // Save user into database
        await UserModel.create({
            ...value,
            password: hashedPassword
        });
        // Send user confirmation email
        // Respond to request
        res.json('User registered!');
    } catch (error) {
        next(error);

    }
}

export const loginUser = async (req, res, next) => {
    try {
        // Validate user input
        const { error, value } = loginUserValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        // Find one user with identifier
        const user = await UserModel.findOne({ email: value.email });
        if (!user) {
            return res.status(404).json("User does not exist!");
        }
        // Compare their passwords
        const correctPassword = bcrypt.compareSync(value.password, user.password);
        if (!correctPassword) {
            return registerUser.status(401).json("Invalid credentials!");
        }
        // Sign a token for user
        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_PRIVATE_KEY,
            { expiresIn: "24h" }
        );
         // Respond to request
         res.json({
            message: 'User logged in!',
            accessToken: token

         });
        res.json('User logged in successfully!');

    } catch (error) {
        next(error);
    }
}

 export const getProfile = (re, res, next) => {
    res.json('User profile');
 }

export const logoutUser = (req, res, next) => {
    res.json('User logged out!');
}

export const updatProfile = (req, res, next) => {
    res.json('User profile updated!');
}