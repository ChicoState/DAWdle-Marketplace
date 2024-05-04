import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      min: 3,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "https://cdn.iconscout.com/icon/free/png-256/free-user-1895567-1604557.png",
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;