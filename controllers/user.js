export const registerUser = (req, res, next) => {
    res.json('User registered!');
}

export const loginUser = (req, res, next) => {
    res.json('User logged in successfully!');
}

export const logoutUser = (req, res, next) => {
    res.json('User logged out!');
}

export const updatProfile = (req, res, next) => {
    res.json('User profile updated!');
}