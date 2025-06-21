// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function RegisterPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('customer'); // default role

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await fetch('/api/register', {
//       method: 'POST',
//       body: JSON.stringify({ email, password, role }),
//     });

//     const data = await res.json();
//     if (res.ok) {
//       alert('User registered successfully');
//       router.push('/login'); // go to login after registration
//     } else {
//       alert(data.error || 'Something went wrong');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-8 bg-gray-900 text-white rounded">
//       <h2 className="text-xl font-bold mb-4">Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 mb-4 bg-gray-700"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-2 mb-4 bg-gray-700"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <select
//           className="w-full p-2 mb-4 bg-gray-700"
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//         >
//           <option value="customer">Customer</option>
//           <option value="admin">Admin</option>
//         </select>

//         <button type="submit" className="w-full bg-yellow-500 text-black p-2 font-bold rounded">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }


// ✅ /src/app/api/register/route.js
import dbConnect from '../../../lib/dbConnect';
import User from '@/models/userModel';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    await dbConnect();
    const { email, password, role } = await req.json();

    const existing = await User.findOne({ email });
    if (existing) {
      return Response.json({ error: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ email, password: hashedPassword, role });

    return Response.json({ message: 'User created', user }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}
