function Products({ products, handleAddToCart }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {products.map((p, index) => (
        <div key={index} className="border p-4 rounded-lg shadow">
          <img
            src={p.image}
            className="w-full h-64 object-cover rounded mb-3"
          />

          <h2 className="font-bold text-xl">{p.name}</h2>
          <p className="text-gray-700">₹{p.price}</p>
          <p className="text-gray-500 text-sm">{p.category}</p>
          <p className="font-semibold">⭐ {p.rating}</p>

          <button
            onClick={() => handleAddToCart(p)}
            className="mt-3 bg-fuchsia-500 text-white px-3 py-2  rounded hover:bg-blue-400"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;