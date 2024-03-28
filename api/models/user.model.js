import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar:{
      type:String,
      default:"https://unsplash.com/photos/bokeh-shot-of-blue-and-yellow-bird-FsXq3xu72bs"
    }
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);

export default User;
