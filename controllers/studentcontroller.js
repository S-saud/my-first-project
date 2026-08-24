const User = require("../models/User");
const asyncHandler = require("../middlewares/asynchandler"); // Filhal maan lo ApiError yahin hai

// Create User
const createUser = asyncHandler(async (req, res) => {

    const { name, email, age } = req.body;

    const newUser = await User.create({
        name,
        email,
        age
    });

    if (!newUser) {
        throw new ApiError(400, "User not created");
    }

    res.status(201).json(newUser);

});

// Get All Users
const getUsers = asyncHandler(async (req, res) => {

    const users = await User.find();

    if (!users || users.length === 0) {
        throw new ApiError(404, "Users not found");
    }

    res.status(200).json(users);

});

// Get User By Id
const getUserById = asyncHandler(async (req, res) => {

    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    res.status(200).json(user);

});

// Get User By Email
const getUserByEmail = asyncHandler(async (req, res) => {

    const { email } = req.params;

    const user = await User.findOne({ email });

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    res.status(200).json(user);

});

// Update User By Email
const updateUserByEmail = asyncHandler(async (req, res) => {

    const { email } = req.params;
    const { name, age } = req.body;

    const user = await User.findOneAndUpdate(
        { email },
        { name, age },
        { new: true }
    );

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    res.status(200).json(user);

});

// Update User By Id
const updateUserById = asyncHandler(async (req, res) => {

    const { id } = req.params;
    const { name, age, email } = req.body;

    const user = await User.findByIdAndUpdate(
        id,
        { name, age, email },
        { new: true }
    );

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    res.status(200).json(user);

});

// Delete User By Email
const deleteUserByEmail = asyncHandler(async (req, res) => {

    const { email } = req.params;

    const user = await User.findOneAndDelete({ email });

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    res.status(200).json(user);

});

// Delete User By Id
const deleteUserById = asyncHandler(async (req, res) => {

    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    res.status(200).json(user);

});

module.exports = {
    createUser,
    getUsers,
    getUserById,
    getUserByEmail,
    updateUserByEmail,
    updateUserById,
    deleteUserByEmail,
    deleteUserById,
};