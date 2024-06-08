import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    requried: [true, "Please provide a username"],
    unique: true,
  },
  email: {
    type: String,
    requried: [true, "Please provide an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPass
});

const User = mongoose.models.users || mongoose.model("Users", userSchema);

export default User;
