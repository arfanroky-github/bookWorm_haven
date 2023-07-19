import MenuItem from "./MenuItem";

const Navbar = () => {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10 ">
      <nav className="container mx-auto flex justify-between items-center h-16">
        <a className="title-font font-bold text-gray-400">
          B<span className="text-orange-500">o</span>o
          <span className="text-orange-500">k</span> Catalog
        </a>
        <MenuItem />
      </nav>
    </header>
  );
};
export default Navbar;
