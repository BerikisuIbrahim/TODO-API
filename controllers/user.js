export const registerUser = (req, res, next) => {
    res.json('User registered!');
}

export const logIn = (req, res, next) => {
    res.json('User logged in successfully!');
}

export const logOut = (req, res, next) => {
    res.json('User logged out!');
}