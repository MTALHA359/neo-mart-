// /app/api/products/route.js
import dbConnect from '../../../../lib/dbConnect';

import Product from '@/models/productModel';

export async function GET() {
  await dbConnect();
  const products = await Product.find().sort({ createdAt: -1 });
  return Response.json(products);
}

export async function POST(req) {
  await dbConnect();
  const body = await req.json();
  const product = await Product.create(body);
  return Response.json(product);
}
