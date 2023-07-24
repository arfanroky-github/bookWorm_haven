import { IconType } from "react-icons";
import { FaBook, FaHome } from "react-icons/fa";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const MenuItem = () => {
  const menus = [
    {
      name: "Home",
      icon: <FaHome />,
      route: "/",
    },
    {
      name: "all books",
      icon: <FaBook />,
      route: '/all-books'
    }
  ];
  return (
    <ul className="flex items-center gap-8">
      {menus.map((menu, index) => (
        <li className="flex items-center gap-x-1 text-gray-300 capitalize" key={index}>
          <span>{menu.icon}</span>
          <Link to={menu.route}>{menu.name}</Link>
        </li>
      ))}
      <li>
        <Link to={'/login'}>
        <Button className="border border-gray-400 bg-transparent text-gray-400 hover:bg-gray-700 "> Log in</Button>
        </Link>
      </li>
      <li>
        <Link to={'/signup'}>
        <Button className="bg-white text-gray-600 hover hover:opacity-90 transition-opacity duration-300">Sign Up</Button>
        </Link>
      </li>
    </ul>
  );
};
export default MenuItem;
