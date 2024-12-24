import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
  {/* Navbar */}
  <div className="bg-slate-800 shadow-xl w-full h-40 text-white flex items-center font-Montserrat text-5xl pl-10 font-bold xs:h-28">
    Movies HUB
  </div>
  
  {/* Horizontal Navigation Links */}
  <nav className="bg-slate-700 text-white flex justify-center space-x-10 py-4 text-lg font-semibold">
    <Link to="/movies" className="hover:text-yellow-300 transition">Movies</Link>
    <Link to="/" className="hover:text-yellow-300 transition">Trending</Link>
    <Link to="/tvseries" className="hover:text-yellow-300 transition">TV Series</Link>
    <Link to="/search" className="hover:text-yellow-300 transition">Search</Link>
  </nav>
</div>

  )
}

export default Navbar;