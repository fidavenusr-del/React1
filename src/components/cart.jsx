function Cart({ cart }) {
  return (
    <div className="mt-6 p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="border p-3 rounded mb-3 flex gap-4">
            <img src={item.image} className="w-24 h-24 object-cover rounded" />
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <p>₹{item.price}</p>
              <p>{item.category}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;