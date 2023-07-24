import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";

const Navbar = () => {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center h-16">
        <Link to={"/"} className="title-font font-bold text-gray-400">
          📚 BookWorm Haven 🐛
        </Link>
        <MenuItem />
      </nav>
    </header>
  );
};
export default Navbar;
