import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const generateCode = () => {
  return "user_" + Math.random().toString(36).substring(2, 10);
};

const UserSchema = new mongoose.Schema({
  code: {
    type: String,
    unique: true,
    default: generateCode
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// 🔥 corrigido
UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 10);
});

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

export default mongoose.model("User", UserSchema);