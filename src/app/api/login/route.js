

import dbConnect from '../../../../lib/dbConnect';
import User from '@/models/userModel';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  await dbConnect();
  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user) return Response.json({ error: 'User not found' }, { status: 404 });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return Response.json({ error: 'Invalid credentials' }, { status: 401 });

  const token = jwt.sign(
    { userId: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );

  return Response.json({ token, role: user.role, name: user.name });
}


