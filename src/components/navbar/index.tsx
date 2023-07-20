import MenuItem from "./MenuItem";

// when scrolling the nav bar should blur
const Navbar = () => {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center h-16">
        <a className="title-font font-bold text-gray-400">
          📚 BookWorm Haven 🐛
        </a>
        <MenuItem />
      </nav>
    </header>
  );
};
export default Navbar;
