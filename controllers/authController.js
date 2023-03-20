import User from "../models/User";

const register = async (req, res) => {
  try {
    const user = await User.create(req.body);
  } catch (error) {}

  res.send("Register");
};

const login = async (req, res) => {
  res.send("Login");
};

const updateUser = async (req, res) => {
  res.send("Update User");
};

export { register, login, updateUser };
