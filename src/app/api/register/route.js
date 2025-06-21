
import dbConnect from '../../../../lib/dbConnect';
import User from '@/models/userModel';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  await dbConnect();
  const { name, email, password, role } = await req.json();

  const existing = await User.findOne({ email });
  if (existing) {
    return Response.json({ error: 'User already exists' }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role: role || 'customer',
  });

  return Response.json({ message: 'Registered successfully' });
}
