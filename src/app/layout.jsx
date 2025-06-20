import './globals.css'; // this must exist!
import Navbar from './components/Navbar'; // adjust the path if needed
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MartLux',
  description: 'High-end 3D animated shopping experience',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0e0e18] text-white`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
