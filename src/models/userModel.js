
// src/models/userModel.js
// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, enum: ['admin', 'customer'], default: 'customer' },
// });

// export default mongoose.models.User || mongoose.model('User', userSchema);


import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['admin', 'customer'], default: 'customer' }, // ✅
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', userSchema);
