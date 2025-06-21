{editProduct && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-[#1a1a28] p-6 rounded-lg w-full max-w-md">
      <h2 className="text-lg font-bold text-yellow-300 mb-4">Edit Product</h2>

      <div className="space-y-3">
        <input
          type="text"
          value={editProduct.name}
          onChange={e => setEditProduct({ ...editProduct, name: e.target.value })}
          className="w-full p-2 bg-[#121212] border border-yellow-300/20 rounded"
        />
        <input
          type="number"
          value={editProduct.price}
          onChange={e => setEditProduct({ ...editProduct, price: e.target.value })}
          className="w-full p-2 bg-[#121212] border border-yellow-300/20 rounded"
        />
        <input
          type="text"
          value={editProduct.image}
          onChange={e => setEditProduct({ ...editProduct, image: e.target.value })}
          className="w-full p-2 bg-[#121212] border border-yellow-300/20 rounded"
        />
        <input
          type="text"
          value={editProduct.category}
          onChange={e => setEditProduct({ ...editProduct, category: e.target.value })}
          className="w-full p-2 bg-[#121212] border border-yellow-300/20 rounded"
        />
      </div>

      <div className="mt-4 flex justify-between">
        <button
          className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500"
          onClick={async () => {
            const res = await fetch(`/api/products/${editProduct._id}`, {
              method: 'PUT',
              body: JSON.stringify(editProduct),
            });

            if (res.ok) {
              const updated = await res.json();
              setProducts(products.map(p => p._id === updated._id ? updated : p));
              setEditProduct(null);
            }
          }}
        >
          Save
        </button>
        <button
          onClick={() => setEditProduct(null)}
          className="px-4 py-2 text-white border border-yellow-400 rounded hover:bg-red-500"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}
