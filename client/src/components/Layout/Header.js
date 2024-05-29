import React from 'react'
import { NavLink, Link } from 'react-router-dom';
// import { HiOutlineShoppingBag } from "react-icons/hi";
function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" > 🛒 Ecom-Shop</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link " >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category" className="nav-link "  >Category</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/register" className="nav-link" href="#">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Login" className="nav-link" href="#">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cart" className="nav-link" href="#">Cart (0)</NavLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>

    </>
  )
}

export default Header
