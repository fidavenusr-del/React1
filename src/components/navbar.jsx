export default function Navbar({ setPage, cartCount }) {
  return (
    <nav className="w-full bg-fuchsia-600 text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-2">
    
        <ul className="flex gap-6 text-sm font-medium">
          <li className="cursor-pointer hover:underline" onClick={() => setPage("home")}>
            Home
          </li>
          <li className="cursor-pointer hover:underline">Electronics</li>
          <li className="cursor-pointer hover:underline">Fashion</li>
          <li className="cursor-pointer hover:underline">Grocery</li>
          <li className="cursor-pointer hover:underline">Appliances</li>
        </ul>


        <button
          onClick={() => setPage("cart")}
          className="relative bg-white text-fuchsia-800 px-3 py-1 rounded font-semibold"
        >
          Cart ({cartCount})
        </button>
      </div>
    </nav>
  );
}