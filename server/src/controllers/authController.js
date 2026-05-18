import { authService } from "../services/index.js";
import { envConfig } from "../configs/index.js";
import jwt from "jsonwebtoken";

const signUpUser = async (req, res) => {
  try {
    const newUser = await authService.createUser(req.body);

    if (!newUser) {
      return res.status(409).json({
        message: "User is already exists, you can login",
        success: false,
      });
    }

    res.status(201).json({ message: "Signup Successful", success: true });
  } catch (e) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

const signInUser = async (req, res) => {
  try {
    const user = await authService.loginUser(req.body);

    const errorMessage = "Auth failed email or password is wrong";

    if (!user) {
      res.status(403).json({ message: errorMessage, success: false });
    }

    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      envConfig.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(201).json({
      message: "Signup successful",
      success: true,
      jwtToken: jwtToken,
      _id: user._id,
      email: user.email,
      name: user.fullName,
    });
  } catch (e) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    const updateUser = await authService.updateUser(id, newData);

    if (!updateUser) {
      res.status(404).json({ message: "No user found with this id" });
      return;
    }

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export { signUpUser, signInUser, updateUser };
