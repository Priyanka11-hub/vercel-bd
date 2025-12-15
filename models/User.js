import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  role: String,
  subRole: String,
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,

  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

export default mongoose.model("User", userSchema);
