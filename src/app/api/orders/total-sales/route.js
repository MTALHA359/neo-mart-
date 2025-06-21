import dbConnect from '../../../../../lib/dbConnect';
import Order from '@/models/orderModel';

export async function GET() {
  await dbConnect();
  const orders = await Order.find();
  const total = orders.reduce((acc, order) => acc + order.totalAmount, 0);
  return Response.json({ total });
}
