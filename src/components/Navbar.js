import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const Navbar = () => {
  const { openSidebar } = useProductsContext();
  return (
    <nav className='nav'>
      <h4 className='logo'>
        Comfy<span>Sloth</span>
      </h4>
      <button type='button' className='nav-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <ul className='nav__page-links'>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          );
        })}
      </ul>
      <CartButtons />
    </nav>
  );
};

export default Navbar;
