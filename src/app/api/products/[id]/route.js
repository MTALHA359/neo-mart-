import dbConnect from '@/lib/dbConnect';
import Product from '@/models/productModel';

export async function DELETE(req, { params }) {
  await dbConnect();
  await Product.findByIdAndDelete(params.id);
  return Response.json({ success: true });
}

export async function PUT(req, { params }) {
  await dbConnect();
  const body = await req.json();

  const updated = await Product.findByIdAndUpdate(params.id, body, {
    new: true,
  });

  return Response.json(updated);
}
