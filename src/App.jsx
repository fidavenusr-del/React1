import { useState } from "react";
import products from "./products";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Products from "./components/products";
import Cart from "./components/cart";

function App() {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("");
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home");
  
  const filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(searchText.toLowerCase()))
    .filter((p) => (category === "All" ? true : p.category === category))
    .sort((a, b) => {
      if (sortBy === "low-high") return a.price - b.price;
      if (sortBy === "high-low") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="font-sans">
      <Header />
      <Navbar setPage={setPage} cartCount={cart.length} />


      {page === "home" && (
        <div className="p-6">
  
          <div className="flex flex-col gap-4 md:flex-row mb-6">
            <input
              type="text"
              placeholder="Search products..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="p-2 border rounded w-full md:w-1/3"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="p-2 border rounded"
            >
              <option>All</option>
              <option>Category A</option>
              <option>Category B</option>
              <option>Category C</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="p-2 border rounded"
            >
              <option value="">Sort</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          <Products products={filteredProducts} handleAddToCart={handleAddToCart} />
        </div>
      )}

      {page === "cart" && <Cart cart={cart} />}

      <Footer />
    </div>
  );
}

export default App;