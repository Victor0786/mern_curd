// filepath: c:\Users\hp\OneDrive\Desktop\React Node crud\server\model\User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  } ,

 email: {
    type: String,
    required: true
  },
 
 address: {
    type: String,
    required: true
  }
});

const User = mongoose.model("User", userSchema);

export default User;