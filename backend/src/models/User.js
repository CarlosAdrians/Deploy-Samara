import mongoose from "mongoose";
import bcrypt from "bcrypt";

// função pra gerar código único
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

// criptografar senha antes de salvar
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// método pra comparar senha
UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

export default mongoose.model("User", UserSchema);