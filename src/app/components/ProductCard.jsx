'use client';

export default function ProductCard({ product, addToCart, isAdmin }) {
  return (
    <div className="rounded-xl border border-yellow-400/10 p-4 bg-[#1a1a28] hover:shadow-md transition-all group">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-3" />
      <h3 className="text-lg font-bold text-yellow-200">{product.name}</h3>
      <p className="text-yellow-400 mb-3">${product.price}</p>

      <div className="flex justify-between items-center">
        <button
          onClick={() => addToCart(product)}
          className="px-4 py-1 bg-yellow-400 text-black rounded hover:bg-yellow-500"
        >
          Add to Cart
        </button>

        {/* Only for Admins */}
        {isAdmin && (
          <button
            className="text-xs text-yellow-100 underline hover:text-yellow-300"
            onClick={() => alert('Edit Product (Coming Soon)')}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}
