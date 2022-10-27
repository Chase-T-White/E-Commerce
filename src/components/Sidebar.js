import React from "react";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useUserContext } from "../context/user_context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const { myUser } = useUserContext();
  return (
    <div className='sidebar-container'>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className='sidebar-header'>
          <img src='' alt='comfy sloth' className='logo' />
          <button type='button' className='close-btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
      </aside>
      <ul className='links'>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link to={link.url} onClick={closeSidebar}>
                {link.text}
              </Link>
            </li>
          );
        })}
        {myUser && (
          <li>
            <Link to='/checkout' onClick={closeSidebar}>
              checkout
            </Link>
          </li>
        )}
      </ul>
      <CartButtons />
    </div>
  );
};

export default Sidebar;
