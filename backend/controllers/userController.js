import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

//@desc Auth user & get the token
//@route POST/api/users/login
//@access public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
  res.send("auth user");
});

//@desc Register user
//@route POST/api/users
//@access public

const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

//@desc Logout user/clear cookie
//@route POST/api/users/logout
//@access Private

const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});

//@desc Get user profile
//@route GET/api/users/profile
//@access public

const getUserProfile = asyncHandler(async (req, res) => {
  res.send(" get user profile");
});

//@desc Update user profile
//@route PUT/api/users/profile
//@access private

const updateUserProfile = asyncHandler(async (req, res) => {
  res.send(" update user profile");
});

//@desc Get users
//@route GET/api/users
//@access Private/Admin

const getUsers = asyncHandler(async (req, res) => {
  res.send(" get users");
});

//@desc Get user by ID
//@route GET/api/users/:id
//@access Private/Admin

const getUserByID = asyncHandler(async (req, res) => {
  res.send(" get user by id");
});

//@desc Delete user
//@route DELETE/api/users/:id
//@access Private/Admin

const deleteUser = asyncHandler(async (req, res) => {
  res.send(" delete user");
});

//@desc Upadate user
//@route PUT/api/users/:id
//@access Private/Admin

const updateUser = asyncHandler(async (req, res) => {
  res.send(" update user");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser,
};
